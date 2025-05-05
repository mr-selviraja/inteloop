import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../api/axiosInstance';
import FormInput from '../components/FormInput';
import illustration from '../assets/ai-analysis.svg'; // Make sure the image exists

const LoginPage = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Auth context
  const navigate = useNavigate(); // For routing

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request
      const response = await axiosInstance.post('/auth/login', { email, password });
      const { accessToken, user } = response.data;

      // Store token and user info in context/localStorage
      login(accessToken, user);

      // Navigate based on role
      const role = user.role;
      if (role === 'admin') navigate('/admin/dashboard');
      else if (role === 'organization') navigate('/org/dashboard');
      else if (role === 'stakeholder') navigate('/stakeholder/feedback');
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Login error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row animate-fadeIn">

        {/* Left Illustration Panel */}
        <div className="md:w-1/2 bg-indigo-600 text-white flex flex-col justify-center items-center p-10">
          <img src={illustration} alt="Login Visual" className="w-2/3 mb-6" />
          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p className="text-center mt-2 text-sm max-w-xs">
            Sign in to your account to access your personalized dashboard.
          </p>
        </div>

        {/* Right Form Panel */}
        <div className="md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
            <FormInput
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
