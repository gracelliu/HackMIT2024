import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery } from 'convex/react';  // Use Convex's useQuery hook
import { api } from "../../../convex/_generated/api";

const MyLineChart = () => {
  // Use the useQuery hook to fetch data from Convex
  fetch("https://beloved-penguin-979.convex.cloud/getData").then((data) => {
    if (!data.ok) {
      console.log(data.body.toString(), data.text)
    }
    return data.json();
  }).then((data) => {
    console.log("test2", data)
  })
  const convexData = useQuery(api.getData.getData);
  // const convexData = [1, 2, 3, 4]
  console.log(useQuery, convexData)
  // const convexData = useQuery(api.);  // 'getData' refers to your Convex query function

  // Check if the data is still loading
  if (!convexData) {
    return <div>Loading...</div>;
  } 3

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