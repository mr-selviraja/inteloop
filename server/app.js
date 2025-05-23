import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from "cors";

// Load environment variables from .env
dotenv.config();

// Create an express app instance
const app = express();

// Enable cors
app.use(cors())

// Middleware to parse JSON request bodies
app.use(express.json()); 

// Auth-related routes
app.use('/api/auth', authRoutes);  // Mount auth routes here

// Root route, can be used for testing if the server is up
app.use('/', (req, res) => res.status(200).json({
    message: "Response from Inteloop Server..!",
    path: "/"
}));

// Mention a port for the server to run from
const PORT = process.env.PORT || 5000;
// Connect to DB and then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
