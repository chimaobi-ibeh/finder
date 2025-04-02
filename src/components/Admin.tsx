import React from 'react';
import KYCUpload from './KYCUpload';

export default function Admin() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">KYC Verification</h2>
          <KYCUpload />
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Moderate Listings</h2>
          <p>Placeholder for listing moderation UI.</p>
        </section>
      </div>
    </div>
  );
}