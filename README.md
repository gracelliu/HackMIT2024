

---

# Axy

**Axy** is a comprehensive stress management app that tracks real-time data from wearables, analyzes stress patterns, and provides personalized insights to promote well-being. Built during HackMIT 2024, Axy integrates hardware sensors, machine learning models, and real-time data analysis to help users manage and reduce their stress effectively.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [How It Works](#how-it-works)
- [Challenges We Faced](#challenges-we-faced)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)

## Overview

Axy is designed to give users a real-time analysis of their stress levels by integrating data from wearables (such as Apple Watch and custom hardware). Using advanced data visualization, machine learning models, and personalized recommendations, users can track their stress patterns over time and receive suggestions on how to better manage stress throughout the day.

## Features

- **Real-time Data Tracking**: Collects data from wearables like Apple Watch and custom hardware sensors to monitor stress indicators.
- **Personalized Insights**: Provides users with personalized suggestions based on their unique stress patterns.
- **Stress Pattern Visualization**: Visualizes stress trends over time with intuitive graphs and charts.
- **Health & Fitness API Integration**: Integrates with Apple Fitness and other health platforms to track physical activity and its impact on stress.
- **Machine Learning Models**: Analyzes stress levels using machine learning to predict high-stress periods.
- **User-Friendly Interface**: Built with React Native for cross-platform compatibility, ensuring a smooth user experience.

## Technologies Used

- **Backend**: Convex (Functions, Mutations, HTTP Calls)
- **Frontend**: React Native
- **Database**: Convex Schema Databases
- **Hardware Integration**: ESP-A26, MPU-6050 sensors
- **APIs**: Apple Fitness, Terra API
- **Data Storage & Virtualization**: Convex dashboard for data management
- **Machine Learning**: Statistical learning techniques to analyze stress data

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gracelliu/HackMIT2024.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm start
   ```

## How It Works

Axy collects real-time data from wearables and hardware sensors and posts it to Convex via functions and mutations. This data is stored in schema databases and visualized on a dashboard, making it easy to monitor trends and receive insights. Users are provided with actionable advice based on their stress patterns and real-time data analysis, promoting better stress management.

## Challenges We Faced

- **Integrating React Native**: None of the team had experience with React Native prior to this project, and it was a steep learning curve to get the app functioning smoothly on both iOS and Android.
- **Real-Time Data Syncing**: Syncing real-time data from multiple hardware sources required careful handling of sensor data streams.
- **API Integration**: Working with external APIs like Apple Fitness and the Terra API presented challenges in managing the different formats and data flows.
- **Backend Setup with Convex**: Setting up Convex as our backend required designing multiple functions and schema to handle real-time data efficiently.

## Future Enhancements

- **Expand Wearable Integration**: Adding more wearables beyond Apple Watch, such as Fitbit or Garmin devices.
- **Advanced Analytics**: Further development of machine learning models to provide more predictive insights.
- **More User Customization**: Allowing users to customize their stress management plans based on their preferences and daily routines.
- **Social Integration**: Adding features that allow users to share progress with friends or join community challenges for mental well-being.

## Contributors

- Lucas Reljic 
- Amanda Yin 
- Grace Liu 
- Vivian Zhou 

