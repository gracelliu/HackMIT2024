// src/pages/EntryPage.jsx
import React, { useEffect, useState, useCallback } from "react";
import SideBar from "../SideBar.jsx"
import MyLineChart from "../assets/MyLineChart";
import { useQuery } from "convex/react";
import { api } from "./../../convex/_generated/api";

const EntryPage = () => {
  const [stress, setStress] = useState(0);
  const response = useQuery(api.tasks.get);
  console.log(response);

  const data = response?.[response.length-1]?.accel;

  useEffect(() => {
    setStress((data ?? 0).toFixed(2));
  }, [data])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderColor: "#FFFFFF", minHeight: '100vh', width: '100%', margin: '0', alignItems: "start", justifyContent: 'start' }}>
      <div style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
        {/* <SideBar></SideBar> */}
        <img style={{ marginTop: '20px', height: '30px', justifySelf: 'center', alignSelf: 'center' }} src="src/assets/smiley.png" />
        <div style={{ marginTop: '20px', color: '#58315A', fontFamily: 'sans-serif', fontSize: '30pt', marginLeft: '20px' }}>Anxy</div>
      </div>

      <h3 style={{ color: '#58315A', justifySelf: "start" }}>
        Overview for today
      </h3>

      <img src="src/assets/stress_graph.png" style={{
        width: '350px', height: '210px'
      }} />

      <h3 style={{ color: '#58315A', marginTop: '40px', marginBottom: '-35px' }}>
        Stress Index
      </h3>

      <div style={{ alignSelf: 'center', justifySelf: 'start' }}>
        <div style={{ color: '#000000', fontSize: '70pt', zIndex: "3", marginTop: '20px' }}>
          {stress}
        </div>
        {/* <div id="box" style={{ zIndex: '1', backgroundColor: "#FF0380", width: '1000px', height: '100px', left: "0px", bottom:"470px", position: 'absolute' }}>
        </div> */}
      </div>


      <div style={{
        backgroundColor: '#FFEDC1', maxWidth: "350px", display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        borderRadius: '30px', margin: "10px, 0px, 0px, 10px", padding: "10px", color: 'white'
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



    </div >
    // <MyLineChart></MyLineChart>
  );
}

export default EntryPage;
