import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 fiNder. All rights reserved.</p>
        <div className="mt-2">
          <a href="/about" className="text-gray-400 hover:text-white mx-2">About</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms</a>
        </div>
      </div>
    </footer>
  );
}