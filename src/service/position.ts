import { LatLngTuple } from 'leaflet';
import { useState, useEffect } from 'react';

export const usePosition = function(): LatLngTuple | undefined {
  const [position, setPosition] = useState();

  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn('Geolocation is not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition((current) => {
      setPosition([
        current.coords.latitude,
        current.coords.longitude,
      ])
    });
  }, [setPosition]);

  return position;
};
