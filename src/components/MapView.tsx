import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapViewProps {
  longitude: number;
  latitude: number;
  properties: { id: string; longitude: number; latitude: number; title: string }[];
}

export default function MapView({ longitude, latitude, properties }: MapViewProps) {
  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 12,
    });

    properties.forEach(property => {
      new mapboxgl.Marker()
        .setLngLat([property.longitude, property.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${property.title}</h3>`))
        .addTo(map);
    });

    return () => map.remove();
  }, [longitude, latitude, properties]);

  return <div id="map" className="w-full h-96" />;
}