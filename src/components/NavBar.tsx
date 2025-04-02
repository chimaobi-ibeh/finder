import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../lib/firebase';
import Button from './ui/Button';

export default function NavBar() {
  const { user, role } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };

  const isLandingPage = location.pathname === '/' && !user;

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">fiNder</Link>
        <div className="space-x-6">
          {isLandingPage ? (
            <>
              <Link
                to="/register"
                className="relative inline-block text-lg font-medium transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-primary hover:px-4 hover:py-2 hover:rounded-lg"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="relative inline-block text-lg font-medium transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-primary hover:px-4 hover:py-2 hover:rounded-lg"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              {user && (
                <>
                  <Link to="/" className="hover:underline">Home</Link>
                  {role === 'buyer' && (
                    <Link to="/listings" className="hover:underline">Search Listings</Link>
                  )}
                  {role === 'realtor' && (
                    <Link to="/manage-listings" className="hover:underline">Manage Listings</Link>
                  )}
                  {role === 'admin' && (
                    <Link to="/admin" className="hover:underline">Admin Dashboard</Link>
                  )}
                  <div className="inline-block relative group">
                    <span className="cursor-pointer hover:underline">Account</span>
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg hidden group-hover:block">
                      <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                      {role === 'realtor' && (
                        <Link to="/kyc" className="block px-4 py-2 hover:bg-gray-100">Submit KYC</Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
              {!user && (
                <>
                  <Link
                    to="/register"
                    className="relative inline-block text-lg font-medium transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-primary hover:px-4 hover:py-2 hover:rounded-lg"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="relative inline-block text-lg font-medium transition-all duration-300 transform hover:scale-110 hover:bg-white hover:text-primary hover:px-4 hover:py-2 hover:rounded-lg"
                  >
                    Login
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}