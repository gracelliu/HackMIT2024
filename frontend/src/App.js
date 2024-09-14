import React from "react";
import { ConvexProvider } from "convex/react";
import { convex } from "./convex";

function App() {
  return (
    <ConvexProvider client={convex}>
      <div className="App">
        <h1>Hello from Convex + React!</h1>
        {/* Your other components */}
      </div>
    </ConvexProvider>
  );
}

export default App;
