// src/pages/EntryPage.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios';
import MyLineChart from "../assets/MyLineChart";


function EntryPage() {


  const [stress, setStress] = useState()
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/events');
        setStress(response);
        const data = await response.json();
        setStress(data.stressIndex);
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderColor: "#FFFFFF", minHeight: '100vh', width: '100%', margin: '0', justifyContent: 'start' }}>
      <div>
        
        <h1 style={{color: '#000000', font: '90pt'}}>StressLess</h1>
      </div>
      <div style={{ width: '100%' }}></div>
      
      <h3 style={{color: '#000000'}}>  
        Overview for today
      </h3>

      <img src="src/assets/stress_graph.png" style={{ width: '350px', height: '250px', marginLeft: '30px', marginBottom: '20px' }} />

      <h3 style={{ color: '#000000' }}>
        Stress Index
      </h3>
      <div style={{
        backgroundColor: '#FFEDC1', maxWidth:"350px", display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        borderRadius: '30px', margin:"10px, 10px", padding:"10px", color: 'white'
      }}>
        <div style={{ color: '#000000', marginLeft: '30px' }}>
          <p>
            Your stress index is based on factors such as fidgeting, heart rate, and body temperature.
          </p>
        </div>
        <img src="src/assets/anxious_person.png" style={{ marginBottom: '20px' }} />
      </div>

      {/* <button onClick={() => {
        setStress(stress + 1)
      }}>press</button>  */}


      <div style={{ flex: '2' }}>
        <div style={{ color: "#FF0000" }}>




          <p style={{ color: '#000000', fontSize: '80pt' }}>
            {stress}
          </p>
        </div>
      </div>


    </div>
    // <MyLineChart></MyLineChart>
  );
}

export default EntryPage;
