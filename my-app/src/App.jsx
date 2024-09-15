import React from "react";
import EntryPage from "./Pages/EntryPage"; // Import your entry page component
import "./App.css"; // Import global styles if necessary

function App() {
  return (
    <div className="App">
      {/* Main App Container */}
      <h1>Welcome to My App</h1> {/* Optional Test Heading */}
      <EntryPage /> {/* Render your entry page here */}
    </div>
  );
}

export default App;
