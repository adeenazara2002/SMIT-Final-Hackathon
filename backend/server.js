import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import basicInfoRoutes from "./routes/basicInfoRoutes.js"; // 👈 import your route

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use("/api/basicinfo", basicInfoRoutes); // 👈 use your route

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
