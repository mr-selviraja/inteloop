import jwt from 'jsonwebtoken';

/**
 * Middleware to protect routes by verifying JWT access token.
 * Optionally checks if the authenticated user's role is among the allowed roles
 * @param {Array} roles - An optional array of allowed user roles (e.g., ['admin', 'organization'])
 * @returns {Function} Express middleware function
 */
export const protect = (roles = []) => {
    return (req, res, next) => {
        // Extract the access token from the Authorization header (Bearer <token>)
        const accessToken = req.headers.authorization?.split(' ')[1];

        // If no token is provided, respond with a 401 Unauthorized status
        if (!accessToken) {
            return res.status(401).json({ message: 'Access denied. No Token provided.' });
        }

        try {
            // Verify the token and decode its payload
            const decoded = jwt.verify(accessToken, process.env.JWT_SECRET || 'your_jwt_secret');

            // If roles are specified, check if the user's role is permitted
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Forbidden: Insufficient role' });
            }

            // Attach decoded user information to the request object for downstream use
            req.user = decoded;

            // Proceed to the next middleware or route handler
            next();
        } catch (err) {
            // If the token is invalid or verification fails, respond with a 401 Unauthorized status
            return res.status(401).json({ message: 'Invalid accessToken' });
        }
    };
};
