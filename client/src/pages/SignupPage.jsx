import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../api/axiosInstance';
import FormInput from '../components/FormInput';
import illustration from '../assets/collect-feedback.svg'; // Illustration image for visual UI

const SignupPage = () => {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orgName, setOrgName] = useState('');

  const { login } = useAuth(); // Auth context for handling login
  const navigate = useNavigate(); // Navigation after signup

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Construct payload
      const payload = { email, password, orgName };

      // Send signup request
      const response = await axiosInstance.post('/auth/signup', payload);

      const { accessToken, user } = response.data;
      
      // Store token and redirect
      login(accessToken, user);
      navigate('/org/dashboard');
    } catch (error) {
      console.error('Signup failed:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Signup error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row animate-fadeIn">

        {/* Left panel with illustration */}
        <div className="md:w-1/2 bg-indigo-600 text-white flex flex-col justify-center items-center p-10">
          <img src={illustration} alt="Signup Visual" className="w-2/3 mb-6" />
          <h2 className="text-3xl font-bold">Create Your Account</h2>
          <p className="text-center mt-2 text-sm max-w-xs">
            Sign up to get started with your personalized dashboard.
          </p>
        </div>

        {/* Right panel with signup form */}
        <div className="md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
            <FormInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <FormInput
              label="Organization Name"
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="e.g. ABC Foundation"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
