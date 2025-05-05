import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../api/axiosInstance';
import FormInput from '../components/FormInput';
import loginIllustrasion from '../assets/login-illustration.svg';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from '../components/Button';

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
    <div className="min-h-screen bg-violet-600 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row animate-fadeIn">

        {/* Left loginIllustrasion Panel */}
        <div className="md:w-1/2 bg-gray-100 text-gray flex flex-col justify-center items-center p-10">
          <img src={loginIllustrasion} alt="Login Visual" className="w-2/3 mb-6" />
          <h2 className="text-2xl font-bold">Welcome Back!</h2>
          <p className="text-center mt-2 text-sm max-w-xs">
            Sign in to your account to access your product dashboard.
          </p>
        </div>

        {/* Right Form Panel */}
        <div className="md:w-1/2 p-10">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Login</h2>
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
            <Button
              type="submit"
              variant="primaryFilled"
              size="md"
              radius="lg"
              fullWidth
            >
              Login
            </Button>

            <Link to="/" className='flex gap-2 items-center text-violet-600'>
              <FaArrowLeftLong />

              <span className="text-sm font-medium">
                Back to Home
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
