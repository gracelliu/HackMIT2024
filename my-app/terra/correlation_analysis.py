import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import pearsonr, spearmanr

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

# Debug: Check the length of merged data
print(f"Number of merged data points: {len(merged_df)}")

# Ensure there's enough data for correlation analysis
if len(merged_df) < 2:
    print("Not enough data points for correlation analysis.")
else:
    # Calculate Pearson correlation between heart rate and IMU data
    pearson_corr_accel, _ = pearsonr(merged_df['bpm'], merged_df['accel'])
    pearson_corr_gyro, _ = pearsonr(merged_df['bpm'], merged_df['gyro'])
    pearson_corr_ECG, _ = pearsonr(merged_df['bpm'], merged_df['ECG'])

    # Calculate Spearman correlation between heart rate and IMU data
    spearman_corr_accel, _ = spearmanr(merged_df['bpm'], merged_df['accel'])
    spearman_corr_gyro, _ = spearmanr(merged_df['bpm'], merged_df['gyro'])
    spearman_corr_ECG, _ = spearmanr(merged_df['bpm'], merged_df['ECG'])

    # Output correlation results
    print(f"Pearson correlation between heart rate and acceleration: {pearson_corr_accel}")
    print(f"Pearson correlation between heart rate and gyro: {pearson_corr_gyro}")
    print(f"Pearson correlation between heart rate and ECG: {pearson_corr_ECG}")

    print(f"Spearman correlation between heart rate and acceleration: {spearman_corr_accel}")
    print(f"Spearman correlation between heart rate and gyro: {spearman_corr_gyro}")
    print(f"Spearman correlation between heart rate and ECG: {spearman_corr_ECG}")

    # Plotting time series for visual inspection
    plt.figure(figsize=(12, 6))
    plt.plot(merged_df['timestamp'], merged_df['bpm'], label='Heart Rate (bpm)', color='blue')
    plt.plot(merged_df['timestamp'], merged_df['accel'], label='Acceleration', color='green')
    plt.plot(merged_df['timestamp'], merged_df['gyro'], label='Gyroscope', color='orange')
    plt.xlabel('Time')
    plt.ylabel('Values')
    plt.legend()
    plt.title('Heart Rate and Foot Motion Over Time')
    plt.show()
