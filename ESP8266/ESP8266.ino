#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>
#include <ESP8266WiFi.h>
#include <user_interface.h>
#include "credentials.h"  // Include the credentials file
#include <ArduinoJson.h>
extern "C" {
#include "user_interface.h"
#include "wpa2_enterprise.h"
#include "c_types.h"
}



const char* api_endpoint = "https://standing-starling-962.convex.site/storeData";
const char* test_url = "https://www.google.com"; 
Adafruit_MPU6050 mpu;
StaticJsonDocument<200> doc;
bool checkInternet() {
  if (WiFi.status() == WL_CONNECTED) {
    std::unique_ptr<BearSSL::WiFiClientSecure>client(new BearSSL::WiFiClientSecure);

    // Ignore SSL certificate validation
    client->setInsecure();
    
    //create an HTTPClient instance
    HTTPClient https;
    https.begin(*client, test_url);
    int httpCode = https.GET(); // Send the GET request

    if (httpCode > 0) {
      Serial.println("Internet connection successful.");
      https.end();
      return true;
    } else {
      Serial.println("Failed to connect to the internet.");
    }

    https.end();
  } else {
    Serial.println("WiFi not connected.");
  }
  return false;
}
void sendData(String json_data) {
  if (WiFi.status() == WL_CONNECTED) {
    std::unique_ptr<BearSSL::WiFiClientSecure>client(new BearSSL::WiFiClientSecure);

    // Ignore SSL certificate validation
    client->setInsecure();
    
    //create an HTTPClient instance
    HTTPClient https;

    https.begin(*client, api_endpoint);
    https.addHeader("Content-Type", "application/json");
    // http.addHeader("Authorization", "Bearer " + String(api_key));
    https.setTimeout(10000); // Set timeout to 10 seconds (10000 milliseconds)
    Serial.println(json_data);
    int httpCode = https.POST(json_data);  // Send the POST request

    if (httpCode > 0) {
      String response = https.getString();  // Get the response
      Serial.println(httpCode);
      digitalWrite(BUILTIN_LED, LOW); // Indicate wifi is connected
    } else {
      Serial.print(httpCode);
      Serial.println(" Error sending POST request");
    }

    https.end();  // End the connection
  } else {
    Serial.println("WiFi Disconnected");
  }
}


void setup(void) {
  pinMode(BUILTIN_LED, OUTPUT);
  digitalWrite(BUILTIN_LED, HIGH); 
  Serial.begin(115200); // Serial setup
  while (!Serial)
    delay(10); // will pause Zero, Leonardo, etc until serial console opens



  // Initialize the ESP WiFi with WPA2 Enterprise settings
  Serial.println();
  Serial.println("Connecting to eduroam...");
  
  WiFi.disconnect(true);  // Disconnect from any previous connections
  
  // Set WPA2-Enterprise connection
  wifi_set_opmode(STATION_MODE);
  struct station_config wifi_config;
  memset(&wifi_config, 0, sizeof(wifi_config));
  strcpy((char*)wifi_config.ssid, ssid);
  wifi_station_set_config(&wifi_config);
  
  // Set the username and password for eduroam
  // wifi_station_clear_cert_key();
  // wifi_station_clear_enterprise_ca_cert();
  wifi_station_set_wpa2_enterprise_auth(1);
  wifi_station_set_enterprise_identity((uint8*)username, strlen(username));
  wifi_station_set_enterprise_username((uint8*)username, strlen(username));
  wifi_station_set_enterprise_password((uint8*)password, strlen(password));

  // Connect to eduroam
  WiFi.begin();

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());


  
  // Try to initialize MPU6050!
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");

  mpu.setAccelerometerRange(MPU6050_RANGE_8_G); // TODO: Find optimal range
  Serial.print("Accelerometer range set to: ");
  switch (mpu.getAccelerometerRange()) {
  case MPU6050_RANGE_2_G:
    Serial.println("+-2G");
    break;
  case MPU6050_RANGE_4_G:
    Serial.println("+-4G");
    break;
  case MPU6050_RANGE_8_G:
    Serial.println("+-8G");
    break;
  case MPU6050_RANGE_16_G:
    Serial.println("+-16G");
    break;
  }
  mpu.setGyroRange(MPU6050_RANGE_1000_DEG); // TODO: Find optimal range
  Serial.print("Gyro range set to: ");
  switch (mpu.getGyroRange()) {
  case MPU6050_RANGE_250_DEG:
    Serial.println("+- 250 deg/s");
    break;
  case MPU6050_RANGE_500_DEG:
    Serial.println("+- 500 deg/s");
    break;
  case MPU6050_RANGE_1000_DEG:
    Serial.println("+- 1000 deg/s");
    break;
  case MPU6050_RANGE_2000_DEG:
    Serial.println("+- 2000 deg/s");
    break;
  }

  mpu.setFilterBandwidth(MPU6050_BAND_5_HZ);
  Serial.print("Filter bandwidth set to: ");
  switch (mpu.getFilterBandwidth()) {
  case MPU6050_BAND_260_HZ:
    Serial.println("260 Hz");
    break;
  case MPU6050_BAND_184_HZ:
    Serial.println("184 Hz");
    break;
  case MPU6050_BAND_94_HZ:
    Serial.println("94 Hz");
    break;
  case MPU6050_BAND_44_HZ:
    Serial.println("44 Hz");
    break;
  case MPU6050_BAND_21_HZ:
    Serial.println("21 Hz");
    break;
  case MPU6050_BAND_10_HZ:
    Serial.println("10 Hz");
    break;
  case MPU6050_BAND_5_HZ:
    Serial.println("5 Hz");
    break;
  }

  Serial.println("");
  delay(100);
}

void loop() {

  // ECG Sensor Data
  int sensorValue = analogRead(A0);  // Read the analog value from the ECG sensor
  float voltage = sensorValue * (3.3 / 1023.0);  // Convert the value to voltage
  
  Serial.print("ECG Signal Voltage: ");
  Serial.println(voltage);


  /* MPU6050 Sensor data */
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);

  /* Print out the RMS values */
  Serial.print("Acceleration RMS: ");
  float accel_rms = sqrt((pow(a.acceleration.x, 2) + pow(a.acceleration.y, 2) + pow(a.acceleration.z, 2)) / 3);
  Serial.print(accel_rms);
  Serial.println(" m/s^2");

  Serial.print("Rotation RMS: ");
  float rotation_rms = sqrt((pow(g.gyro.x, 2)+pow(g.gyro.y, 2)+pow(g.gyro.z, 2)) / 3);
  Serial.print(rotation_rms);
  Serial.println(" rad/s");

  // Serial.print("Temperature: ");
  // Serial.print(temp.temperature);
  // Serial.println(" degC");

  Serial.println("");
  doc["accel"] = accel_rms;
  doc["gyro"] = rotation_rms;
  doc["ECG"] = voltage;
  String output;
  serializeJson(doc, output);
  Serial.println(output);
  Serial.println(checkInternet());
  sendData(output); // Send data to the API
  delay(400);
}
