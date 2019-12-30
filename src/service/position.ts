import { LatLngTuple } from 'leaflet';
import { useEffect, useState } from 'react';

export type PositionCallback = (value: LatLngTuple) => any | undefined;

export const usePositionEffect = function(callback: PositionCallback) {
  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn('Geolocation is not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition((current) => {
      callback([current.coords.latitude, current.coords.longitude]);
    });
  }, [callback]);
};

export const usePosition = function(defaultValue: LatLngTuple): LatLngTuple {
  const [position, setPosition] = useState(defaultValue);

  usePositionEffect(setPosition);

  return position;
};
