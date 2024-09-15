// src/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; // We'll create this file next

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                ☰
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>
                    &times;
                </button>
                <nav>
                    <ul>
                        <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                        <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
                        <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
