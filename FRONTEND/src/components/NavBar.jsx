import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';
import { logoutUser } from '../api/user.api';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      dispatch(logout());
      navigate({ to: '/auth' });
    }
  };

  return (
    <nav className="bg-[#042940]/95 backdrop-blur border-b border-[#005C53] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - App Name */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-[#DBF227] flex items-center justify-center">
              <span className="text-xs font-extrabold text-[#042940]">US</span>
            </div>
            <Link to="/" className="text-lg font-bold tracking-tight">
              URL <span className="text-[#DBF227]">Shortener</span>
            </Link>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-[#D6D58E] hidden sm:inline">
                  Hi, {user?.name || 'User'}
                </span>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#9FC131] text-[#042940] hover:bg-[#DBF227] transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#D9534F] hover:bg-[#C9302C] text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#9FC131] text-[#042940] hover:bg-[#DBF227] transition-colors"
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;