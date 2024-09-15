// src/pages/EntryPage.jsx
import React, { useState } from "react";
import SideBar from "../SideBar.jsx"
import MyLineChart from "../assets/MyLineChart";

function EntryPage() {

  const [stress, setStress] = useState(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderColor: "#FFFFFF", minHeight: '100vh', width: '100%', margin: '0', alignItems: "start", justifyContent: 'start' }}>
      <div>
        {/* <SideBar></SideBar> */}
        <div style={{ color: '#58315A', fontFamily: 'sans-serif', fontSize: '30pt', marginTop: '20px' }}>StressLess</div>
      </div>

      <h3 style={{ color: '#58315A', marginBottom: '-10px', justifySelf: "start" }}>
        Overview for today
      </h3>

      <img src="src/assets/stress_graph.png" style={{
        width: '350px', height: '220px'
      }} />

      <h3 style={{ color: '#58315A' }}>
        Stress Index
      </h3>

      <div style={{
        backgroundColor: '#FFEDC1', maxWidth: "350px", display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        borderRadius: '30px', margin: "10px, 10px, -100px, 10px", padding: "10px", color: 'white'
      }}>
        <div style={{ color: '#000000', marginLeft: '20px' }}>
          <p>
            Your stress index is based on factors such as fidgeting, heart rate, and body temperature.
          </p>
        </div>
        <img src="src/assets/anxious_person.png" style={{ marginBottom: '20px' }} />
      </div>

      {/* <button onClick={() => {
        setStress(stress + 1)
      }}>press</button>  */}

      <div style={{
        alignSelf:
          'center'
      }}>
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
