import React, { useRef } from 'react';
import Button from './ui/Button';

export default function KYCUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    const files = fileInputRef.current?.files;
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('kyc_docs', file);
    });

    try {
      const response = await fetch('/api/verify-kyc', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('KYC documents uploaded successfully!');
      } else {
        alert('Failed to upload KYC documents.');
      }
    } catch (error) {
      console.error('Error uploading KYC documents:', error);
      alert('An error occurred while uploading.');
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        ref={fileInputRef}
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
        className="border border-gray-300 rounded px-3 py-2"
      />
      <Button onClick={handleUpload}>Submit Documents</Button>
    </div>
  );
}