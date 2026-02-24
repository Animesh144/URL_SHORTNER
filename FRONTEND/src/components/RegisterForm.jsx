import React, { useState } from 'react';
import { registerUser } from '../api/user.api';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice';
import { useNavigate } from '@tanstack/react-router';

const RegisterForm = ({state}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();    
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const data = await registerUser(name, password, email);
      setLoading(false);
      dispatch(login(data.user))
      navigate({to:"/dashboard"})
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div onSubmit={handleSubmit} className="bg-white/95 shadow-2xl rounded-2xl px-8 pt-8 pb-8 mb-4 border border-[#D6D58E]/60">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#042940]">Create an Account</h2>
        <p className="text-xs text-center mb-6 text-gray-500">
          Start shortening and tracking your links in seconds.
        </p>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-[#042940] text-sm font-semibold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow-sm appearance-none border border-[#D6D58E] rounded-xl w-full py-2.5 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#9FC131] focus:border-[#9FC131] bg-[#F9FAFB]"
            id="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-[#042940] text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow-sm appearance-none border border-[#D6D58E] rounded-xl w-full py-2.5 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#9FC131] focus:border-[#9FC131] bg-[#F9FAFB]"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-[#042940] text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow-sm appearance-none border border-[#D6D58E] rounded-xl w-full py-2.5 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-[#9FC131] focus:border-[#9FC131] bg-[#F9FAFB]"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
    
        
        <div className="flex items-center justify-between">
          <button
            className={`bg-[#005C53] hover:bg-[#042940] text-white font-semibold py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DBF227] w-full shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </div>
        
        <div className="text-center mt-4">
          <p className="cursor-pointer text-sm text-gray-600">
            Already have an account?{' '}
            <span
              onClick={()=>state(true)}
              className="text-[#005C53] font-semibold hover:text-[#042940]"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;