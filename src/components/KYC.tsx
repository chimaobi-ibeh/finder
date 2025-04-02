import React from 'react';
import KYCUpload from './KYCUpload';

export default function KYC() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Submit KYC Documents</h1>
      <KYCUpload />
    </div>
  );
}