// Protects routes based on user authentication and allowed roles
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to wrap protected routes and validate role access
const PrivateRoute = ({ allowedRoles }) => {
  const { authUser } = useAuth();

  // Redirect to login if not authenticated
  if (!authUser) return <Navigate to="/login" />;

  // Redirect to unauthorized page if role not permitted
  if (!allowedRoles.includes(authUser.role)) return <Navigate to="/unauthorized" />;

  // Render nested routes
  return <Outlet />;
};

export default PrivateRoute;
