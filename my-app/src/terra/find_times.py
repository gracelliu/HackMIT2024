import pandas as pd
import numpy as np

# Load data from JSON files using the specified file paths
hr_df = pd.read_json('/Users/graceliu/HackMIT2024/my-app/terra/heartrate.json')
imu_df = pd.read_json('/Users/graceliu/HackMIT2024/my-app/terra/footmotion.json')

# Ensure timestamps are datetime objects and round to the nearest minute
hr_df['timestamp'] = pd.to_datetime(hr_df['timestamp']).dt.round('1min')
imu_df['timestamp'] = pd.to_datetime(imu_df['timestamp']).dt.round('1min')

# Resample IMU data to 1-minute intervals and calculate mean values
imu_df.set_index('timestamp', inplace=True)
imu_resampled = imu_df.resample('1min').mean().reset_index()

# Merge the heart rate data with resampled IMU data based on timestamp using a nearest join
merged_df = pd.merge_asof(hr_df.sort_values('timestamp'), imu_resampled.sort_values('timestamp'), on='timestamp', direction='nearest', tolerance=pd.Timedelta('1min'))

# Debug: Display some statistics about the data
print("Heart Rate Data Summary:")
print(merged_df['bpm'].describe())

print("\nIMU Acceleration Data Summary:")
print(merged_df['accel'].describe())

print("\nIMU Gyroscope Data Summary:")
print(merged_df['gyro'].describe())

# Define stress detection thresholds (lowering thresholds for initial testing)
high_hr_threshold = 75  # Adjusted threshold for high heart rate
high_accel_threshold = 5  # Adjusted threshold for high acceleration
high_gyro_threshold = 0.04  # Adjusted threshold for high gyro variance

# Identify potential stress periods
merged_df['stress'] = (merged_df['bpm'] > high_hr_threshold) & \
                      ((merged_df['accel'] > high_accel_threshold) | (merged_df['gyro'] > high_gyro_threshold))

# Extract timestamps where stress is detected
stress_times = merged_df[merged_df['stress']]['timestamp']

# Display the times during the day when stress is detected
print("\nTimes during the day when stress is detected:")
if stress_times.empty:
    print("No stress periods detected with current thresholds.")
else:
    for time in stress_times:
        print(time)
