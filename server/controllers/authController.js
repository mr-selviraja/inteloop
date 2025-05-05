import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import Organization from '../models/Organization.js';
import Stakeholder from '../models/Stakeholder.js';
import { toTitleCase } from '../utils/stringUtils.js';

const JWT_EXPIRES_IN = '1h';

/**
 * @desc    Registers a new organization
 * @route   POST /api/auth/signup
 * @access  Public
 */
export const signup = async (req, res) => {
    const { email, password, orgName } = req.body;
    
    try {
        // Reject if role is sent explicitly (not needed for organization signups)
        if (req.body.role && req.body.role !== 'organization') {
            return res.status(400).json({ message: 'Only organizations can sign up directly.' });
        }

        // Check if organization already exists
        const exists = await Organization.findOne({ email });
        if (exists) return res.status(409).json({ message: 'Email already in use' });

        // Create new organization
        const user = await Organization.create({ email, password, orgName });

        // Build payload with role = 'organization'
        const payload = { id: user._id, role: 'organization' };

        // Generate JWT token
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        // Send success response
        res.status(201).json({
            message: 'Organization signed up successfully..!',
            user: payload,
            accessToken,
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

/**
 * @desc    Authenticates an existing user (admin, organization, or stakeholder)
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user, role;

        // Try finding the user in all role-based collections
        user = await Admin.findOne({ email });
        if (user) role = 'admin';

        if (!user) {
            user = await Organization.findOne({ email });
            if (user) role = 'organization';
        }

        if (!user) {
            user = await Stakeholder.findOne({ email });
            if (user) role = 'stakeholder';
        }

        // If user not found
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // If password does not match
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Build JWT payload
        const payload = {
            id: user._id,
            role,
            ...(role === 'stakeholder' && {
                stakeholderDetails: {
                    orgId: user.orgId,
                    customRole: user.customRole,
                },
            }),
        };

        // Sign token
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        // Send response
        res.status(200).json({
            message: `${toTitleCase(role)} login successful..!`,
            user: payload,
            accessToken,
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};