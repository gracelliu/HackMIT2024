import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

// Initialize the Convex client with your Convex project URL
const convex = new ConvexReactClient("https://standing-starling-962.convex.cloud");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the app in ConvexProvider */}
    <ConvexProvider client={convex}>
      <HashRouter>
        <App />
      </HashRouter>
    </ConvexProvider>
  </React.StrictMode>
);