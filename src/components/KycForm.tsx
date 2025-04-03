import React, { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';

export default function KycForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    document: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, document: file });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('KYC Form Submitted:', formData);
    alert('KYC form submitted! This is a placeholder.');
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Submit KYC Information</h1>
      <p className="text-gray-600 text-center mb-8">
        As a realtor, please provide your KYC details for verification.
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <Input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">ID Number (e.g., NIN)</label>
          <Input
            type="text"
            name="idNumber"
            placeholder="Enter your ID number"
            value={formData.idNumber}
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Upload ID Document</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>
        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary-dark">
          Submit KYC
        </Button>
      </form>
    </div>
  );
}