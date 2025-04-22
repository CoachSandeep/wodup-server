const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth"); // Import the auth routes

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api/auth", authRoutes); // Use the auth routes for /api/auth

// Database connection (MongoDB Atlas, make sure to add your connection string in .env)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected!");
})
.catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});