import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, role } = useAuth();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <p>Email: {user?.email}</p>
      <p>Role: {role}</p>
    </div>
  );
}