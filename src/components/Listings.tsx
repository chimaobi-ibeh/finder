import React, { useState, useEffect } from 'react';
import ListingCard from './ListingCard';
import MapView from './MapView';

export default function Listings() {
  const [listings, setListings] = useState<any[]>([]);

  useEffect(() => {
    // Mock data
    const mockListings = [
      {
        id: '1',
        title: '2-Bedroom Apartment in Lekki',
        price: 5000000,
        location: 'Lekki, Lagos',
        image: 'https://via.placeholder.com/300',
        isVerified: true,
        longitude: 3.3792,
        latitude: 6.5244,
      },
      {
        id: '2',
        title: 'Land in Ajah',
        price: 10000000,
        location: 'Ajah, Lagos',
        image: 'https://via.placeholder.com/300',
        isVerified: false,
        longitude: 3.3892,
        latitude: 6.5344,
      },
    ];
    setListings(mockListings);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {listings.map(listing => (
              <ListingCard
                key={listing.id}
                title={listing.title}
                price={listing.price}
                location={listing.location}
                image={listing.image}
                isVerified={listing.isVerified}
              />
            ))}
          </div>
        </div>
        {/* <div>
  <MapView
    longitude={3.3792}
    latitude={6.5244}
    properties={listings.map(listing => ({
      id: listing.id,
      longitude: listing.longitude,
      latitude: listing.latitude,
      title: listing.title,
    }))}
  />
</div> */}
      </div>
    </div>
  );
}