import React from 'react';
import { useParams } from 'react-router-dom';

export default function ListingDetails() {
  const { id } = useParams(); // Get the listing ID from the URL

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">Listing Details</h1>
      <p className="text-gray-600">Viewing details for listing ID: {id}</p>
      <p className="text-gray-600 mt-4">
        This is a placeholder page. Add functionality to fetch and display listing details here.
      </p>
    </div>
  );
}