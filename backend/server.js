const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Add this route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Example route for API
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
