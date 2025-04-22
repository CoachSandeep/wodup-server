const express = require("express");
const router = express.Router();

// In-memory user store (for simplicity, replace with a real DB)
const users = [];

// Register User Route
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // Simple validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if the user already exists (simple check for demo)
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists." });
  }

  // Save user to the "database" (just the array for now)
  const newUser = { username, email, password };
  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully!",
    user: { username, email }
  });
});

// Login User Route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  // Find user in the "database"
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials." });
  }

  // Generate a simple token (you would use JWT in a real app)
  const token = "simple-token"; // Placeholder for JWT

  res.status(200).json({
    message: "User logged in successfully!",
    token
  });
});

module.exports = router;
