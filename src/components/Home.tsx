import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from './ui/Input';
import Button from './ui/Button';

export default function Home() {
  const { user, role } = useAuth();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/listings');
  };

  if (!user) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to fiNder</h1>
        <p className="text-center mb-6">Please log in or register to continue.</p>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/register')}>Register</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to fiNder, {role}!</h1>
      {role === 'buyer' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Find Your Perfect Property</h2>
          <div className="flex justify-center space-x-4">
            <Input placeholder="Search properties..." className="w-1/2" />
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      )}
      {role === 'realtor' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Manage Your Listings</h2>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => navigate('/manage-listings')}>Create Listing</Button>
            <Button onClick={() => navigate('/kyc')}>Submit KYC</Button>
          </div>
        </div>
      )}
      {role === 'admin' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Admin Dashboard</h2>
          <div className="flex justify-center">
            <Button onClick={() => navigate('/admin')}>Go to Admin Dashboard</Button>
          </div>
        </div>
      )}
    </div>
  );
}