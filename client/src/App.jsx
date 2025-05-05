import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminDashboard from './pages/AdminDashboard';
import OrganizationDashboard from './pages/OrganizationDashboard';
import FeedbackPage from './pages/FeedbackPage';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage';

const App = () => (
  <Routes>
    {/* Landing Page Route */}
    <Route path="/" element={<LandingPage />} />

    {/* Public Login Route */}
    <Route path="/login" element={<LoginPage />} />

    {/* Public Signup Route */}
    <Route path="/signup" element={<SignupPage />} />

    {/* Admin Protected Route */}
    <Route element={<PrivateRoute allowedRoles={['admin']} />}>
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Route>

    {/* Organization Protected Route */}
    <Route element={<PrivateRoute allowedRoles={['organization']} />}>
      <Route path="/org/dashboard" element={<OrganizationDashboard />} />
    </Route>

    {/* Stakeholder Protected Route */}
    <Route element={<PrivateRoute allowedRoles={['stakeholder']} />}>
      <Route path="/feedback" element={<FeedbackPage />} />
    </Route>

    {/* Catch-all route for 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
