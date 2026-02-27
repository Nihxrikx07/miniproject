require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

// Routes
app.use("/api/auth", authRoutes);
console.log("Auth routes loaded");
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
