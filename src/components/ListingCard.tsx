import React from 'react';
import Badge from './ui/Badge';

interface ListingCardProps {
  title: string;
  price: number;
  location: string;
  image: string;
  isVerified: boolean;
}

export default function ListingCard({ title, price, location, image, isVerified }: ListingCardProps) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow h-32"> {/* Fixed height for content area */}
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mt-1">{location}</p>
          <p className="text-primary font-bold text-lg mt-1">₦{price.toLocaleString()}</p>
          {isVerified && <Badge text="fiNder Verified" className="mt-2" />}
        </div>
      </div>
    </div>
  );
}