import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword'; // Import the new component
import Listings from './components/Listings';
import ListingDetails from './components/ListingsDetails';
import ManageListings from './components/ManageListings';
import Profile from './components/Profile';
import KycForm from './components/KycForm';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the new route */}
          <Route path="/listings" element={<PrivateRoute element={<Listings />} roles={['buyer']} />} />
          <Route path="/listing/:id" element={<PrivateRoute element={<ListingDetails />} roles={['buyer']} />} />
          <Route path="/manage-listings" element={<PrivateRoute element={<ManageListings />} roles={['realtor']} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} roles={['buyer', 'realtor', 'admin']} />} />
          <Route path="/kyc" element={<PrivateRoute element={<KycForm />} roles={['realtor']} />} />
          <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} roles={['admin']} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}