import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import categoryRoutes from "./routes/category.routes.js";
import postRoutes from "./routes/post.routes.js";


// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
const PORT = process.env.PORT || 3003;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

  // Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Basic route
app.get("/", (req, res) => {
  res.send("Hello Techie!");
});

app.use('/', categoryRoutes);
app.use('/', postRoutes);

// Export the app for testing or further usage
export default app; 
