// Provides authentication context and utilities across the application
import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

// Create AuthContext to be shared across components
const AuthContext = createContext();

// AuthProvider component to wrap the app and provide auth state
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null); // Auth state for user

    useEffect(() => {
      const token = localStorage.getItem('inteloop-token');
      const storedUser = localStorage.getItem('inteloop-user');
    
      // Basic check for valid JWT format (3 dot-separated parts)
      if (token && token.split('.').length === 3 && storedUser) {
        try {
          const decoded = jwtDecode(token);
          setAuthUser({ ...decoded, token, ...JSON.parse(storedUser) });
        } catch (err) {
          console.error('Invalid JWT:', err);
          localStorage.removeItem('inteloop-token');
          localStorage.removeItem('inteloop-user');
        }
      }
    }, []);
    
    // Login method to store token and user info in localStorage and state
    const login = (token, user) => {
      if (token && user && token.split('.').length === 3) {
        try {
          const decoded = jwtDecode(token);
          localStorage.setItem('inteloop-token', token);
          localStorage.setItem('inteloop-user', JSON.stringify(user));
          setAuthUser({ ...decoded, token, ...user });
        } catch (err) {
          console.error('Login failed. Invalid token:', err);
        }
      } else {
        console.warn('Invalid login credentials');
      }
    };
      

  // Logout method to clear auth state and localStorage
  const logout = () => {
    localStorage.removeItem('inteloop-token');
    localStorage.removeItem('inteloop-user');
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to access auth context
export const useAuth = () => useContext(AuthContext);
