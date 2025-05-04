import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotEnv from "dotenv";

// Load env variables
dotEnv.config();

// Intialize an express app instance
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => res.status(200).send("Response from Server..!"));

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
