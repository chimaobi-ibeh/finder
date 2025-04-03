import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
        <p className="text-gray-600 mb-6">
          This feature is coming soon! In the meantime, please contact support at{' '}
          <a href="mailto:support@finder.ng" className="text-primary hover:underline">
            support@finder.ng
          </a>{' '}
          for assistance with resetting your password.
        </p>
        <Link to="/login" className="text-primary hover:underline">
          Back to Login
        </Link>
      </motion.div>
    </div>
  );
}