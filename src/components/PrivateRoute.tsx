import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  element: React.ReactElement;
  roles: string[];
}

export default function PrivateRoute({ element, roles }: PrivateRouteProps) {
  const { user, role } = useAuth();

  // If the user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If the user's role is not in the allowed roles, redirect to the homepage
  if (!roles.includes(role)) {
    return <Navigate to="/" />;
  }

  // If the user is authenticated and has the correct role, render the element
  return element;
}