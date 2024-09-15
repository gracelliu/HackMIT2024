import requests
import json

import requests

# # Replace with your Convex API URL
# url = "https://beloved-penguin-979.convex.site/storeData"

# response = requests.get(url)

# if response.status_code == 200:
#     print("Data retrieved:", response.json())
# else:
#     print(f"Failed to retrieve data. Status code: {response.status_code}")
# API endpoint URL
url = "https://"

# Data to be sent in the POST request (you can modify this as needed)
data = {
    "accel": 0.01,
    "gyro": 30,
    "ECG": 12
}

# Convert Python dictionary to JSON format
json_data = json.dumps(data)

# Headers for the request (optional, modify if necessary)
headers = {
    'Content-Type': 'application/json'
}

# Send POST request
response = requests.post(url, data=json_data, headers=headers)

# Check the response from the server
if response.status_code == 200:
    print("Data posted successfully!")
    print("Response:", response.text)
else:
    print(f"Failed to post data. Status code: {response.status_code}")
    print("Response:", response.text)

import ssl
import socket

def get_certificate_fingerprint(hostname, port):
    # Create a connection to the server
    conn = ssl.create_connection((hostname, port))
    # Wrap the socket with SSL
    ssock = ssl.SSLContext().wrap_socket(conn, server_hostname=hostname)
    # Get the server's certificate
    cert = ssock.getpeercert(True)
    # Calculate the fingerprint
    fingerprint = ssl.DER_cert_to_PEM_cert(cert).replace('\n', '').replace('-----BEGIN CERTIFICATE-----', '').replace('-----END CERTIFICATE-----', '')
    return fingerprint

# Replace 'example.com' and '443' with your server's hostname and port
hostname = url
port = 443

fingerprint = get_certificate_fingerprint(hostname, port)
print("Certificate Fingerprint (SHA-1):")
print(fingerprint)