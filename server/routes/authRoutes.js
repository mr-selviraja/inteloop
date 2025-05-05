import express from 'express';
import { login, signup } from '../controllers/authController.js';

const router = express.Router();

// Auth route for handling login
router.post('/login', login);

// Auth route for handling signup
router.post('/signup', signup);

export default router;
