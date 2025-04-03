import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <p className="text-gray-600 text-center mb-8">
        Welcome, {user?.email || 'Admin'}! This is the admin dashboard.
      </p>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Admin Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
            <p className="text-gray-600">
              View and manage all registered users (buyers, realtors, and admins).
            </p>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-300">
              Go to Users
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Verify Realtors</h3>
            <p className="text-gray-600">
              Review and approve KYC submissions from realtors.
            </p>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-300">
              Go to KYC Approvals
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Manage Listings</h3>
            <p className="text-gray-600">
              View, edit, or remove listings posted by realtors.
            </p>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-300">
              Go to Listings
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">View Reports</h3>
            <p className="text-gray-600">
              Access analytics and reports on platform activity.
            </p>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-300">
              Go to Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}