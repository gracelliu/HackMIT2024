import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ErrorBoundary from './ErrorBoundary.jsx';
import EntryPage from './Pages/EntryPage.jsx';
import Live from './Pages/Live.jsx';
import Help from './Pages/Help.jsx';
import BottomBar from './BottomBar.jsx';
// import MenuAppBar from './MenuAppBar.jsx';
import './App.css';

function App() {
  return (
    // <ErrorBoundary>
    <div style={{
      width: '100%'
    }}>
      {/* <MenuAppBar /> */}
      <BottomBar />
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/Live" element={<Live />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </div>

    // </ErrorBoundary>
  );
}

export default App;