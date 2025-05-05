import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import { promptInput } from "../utils/commandLineUtils.js";

// Load environment variables from .env file
dotenv.config();

/**
 * Seeds an admin user into the database using terminal input for credentials.
 * - Connects to MongoDB
 * - Prompts user for admin email and password
 * - Checks if a user with the given email already exists
 * - If not, creates a new admin user
 */
const seedAdmin = async () => {
    try {
        const email = await promptInput('Enter admin email: ');
        const password = await promptInput('Enter admin password: ');

        console.log("Seeding in Progress...");

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);

        // Check if the user already exists
        const existing = await User.findOne({ email });

        if (existing) {
            console.log('Admin with this email already exists.');
        } else {
            // Create a new admin user
            await User.create({ email, password, role: 'admin' });
            console.log('Admin seeded successfully.');
        }
    } catch (error) {
        console.error('Error during admin seeding:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
};

// Run the admin seeding script
seedAdmin();
