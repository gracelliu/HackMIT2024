import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

// const fetchData = async () => {
//   try {
//     const convexData = await convex.query('efunc');; // Replace with your query
//     return convexData;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// };

export default function MyLineChart() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       const fetchedData = await fetchData();
//       setData(fetchedData);
//     };
//     getData();
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }
// function App() {
  const tasks = useQuery(api.sensorData.get);
  
  useEffect(() => {
    if (!tasks) {
      console.log('Tasks is null or undefined');
    } else if (tasks.length === 0) {
      console.log('Tasks is an empty array');
    } else {
      console.log('Tasks fetched:', tasks);
    }
  }, [tasks]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      {JSON.stringify(tasks, null, 2)}
      {/* <div>
      <h3>Keys in sensorData records:</h3>
      {keys.length > 0 ? (
        keys.map((taskKeys, index) => (
          <div key={index}>
            <h4>Record {index + 1} Keys:</h4>
            <ul>
              {taskKeys.map((key, idx) => (
                <li key={idx}>{key}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div> */}
      <LineChart data={tasks}>
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
