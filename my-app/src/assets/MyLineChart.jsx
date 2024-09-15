import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery } from 'convex/react';  // Assuming Convex has a useQuery hook for fetching data

// Example Convex query function
// You need to implement this on your Convex backend
const fetchDataFromConvex = () => {
  // Mock function. Replace this with your actual Convex query logic
  return [
    { time: '2024-09-10', value: 400 },
    { time: '2024-09-11', value: 300 },
    { time: '2024-09-12', value: 200 },
    { time: '2024-09-13', value: 278 },
    { time: '2024-09-14', value: 189 },
  ];
};

const MyLineChart = () => {
  const [chartData, setChartData] = useState([]);
  
  // Fetch data from Convex when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const convexData = await fetchDataFromConvex();
      setChartData(convexData);
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
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