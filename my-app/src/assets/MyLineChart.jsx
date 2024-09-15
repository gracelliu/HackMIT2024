import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery } from 'convex/react';  // Use Convex's useQuery hook

const MyLineChart = () => {
  // Use the useQuery hook to fetch data from Convex
  const convexData = useQuery('getData');  // 'getData' refers to your Convex query function

  // Check if the data is still loading
  if (!convexData) {
    return <div>Loading...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={convexData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;