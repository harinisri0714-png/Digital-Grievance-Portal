const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const complaintRoutes = require("./routes/complaintRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Routes
app.use("/api/complaints", complaintRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Render / Local Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});