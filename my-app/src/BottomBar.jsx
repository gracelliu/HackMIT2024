// src/BottomNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BottomBar.css';

const BottomBar = () => {
    return (
        <div className="bottom-nav">
            <Link to="/" className="bottom-icon"><img src="src/assets/Home.png"/></Link>
            <Link to="/stats" className="nav-item"><img src="src/assets/Play.png"/></Link>
            <Link to="/calendar" className="nav-item"><img src="src/assets/Chart.png"/></Link>
            <Link to="/chatbot" className="nav-item"><img src="src/assets/Profile.png"/></Link>
        </div>
    );
};

export default BottomBar;
