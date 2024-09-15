// src/pages/EntryPage.jsx
import React from "react";
import MyLineChart from "../assets/MyLineChart";

function EntryPage() {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderColor: "#FFFFFF", minHeight: '100vh', width: '100%', margin: '0', justifyContent: 'start' }}>
      <div style={{ width: '100%' }}></div>
      <h1 style={{ color: '#000000' }}>
        Stress Index
      </h1>
      <div style={{
        backgroundColor: '#FFEDC1', maxWidth: "350px", display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        borderRadius: '30px', padding: '0px, 0px, 0px, 10px', color: 'white'
      }}>
        <div style={{ color: '#000000' }}>
          <p>
            Your stress index is based on factors such as fidgeting, heart rate, and body temperature.
          </p>
        </div>
        <img src="src/assets/anxious_person.png" />
      </div>


    </div>
    // <MyLineChart></MyLineChart>
  );
}

export default EntryPage;
