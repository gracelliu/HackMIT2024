import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ErrorBoundary from './ErrorBoundary.jsx';
import EntryPage from './Pages/EntryPage.jsx';
import Stats from './Pages/Stats.jsx';
import Chatbot from './Pages/Chatbot.jsx';
import Calendar from './Pages/Calendar.jsx';
import BottomBar from './BottomBar.jsx';
import './App.css';

function App() {
  return (
    // <ErrorBoundary>
    <div style={{
      width: '100%'
    }}>
      <BottomBar />
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </div>

    // </ErrorBoundary>
  );
}

export default App;