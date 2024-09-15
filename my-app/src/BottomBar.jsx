// src/BottomNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BottomBar.css';

const BottomBar = () => {
    return (
        <div className="bottom-nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
        </div>
    );
};

export default BottomBar;
