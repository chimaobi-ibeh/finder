import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Home from './components/Home';
import Listings from './components/Listings';
import Admin from './components/Admin';
import Register from './components/Register';
import Login from './components/Login';
import ManageListings from './components/ManageListings';
import KYC from './components/KYC';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

// Wrapper component to decide between Landing and Home based on auth status
const RootRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Home /> : <Landing />;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<RootRoute />} />
            <Route path="/listings" element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <Listings />
              </ProtectedRoute>
            } />
            <Route path="/manage-listings" element={
              <ProtectedRoute allowedRoles={['realtor']}>
                <ManageListings />
              </ProtectedRoute>
            } />
            <Route path="/kyc" element={
              <ProtectedRoute allowedRoles={['realtor']}>
                <KYC />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute allowedRoles={['buyer', 'realtor', 'admin']}>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}