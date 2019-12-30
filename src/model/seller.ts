import { LatLngTuple } from 'leaflet';
import { useState, useEffect } from 'react';
import { get } from '../service/server';

export type Seller = {
  id: string;
  name: string;
  position: LatLngTuple;
};

export const useSellers = function(): Seller[] | undefined {
  const [sellers, setSellers] = useState();

  useEffect(() => {
    get('api/sellers/list.json')
      .then(setSellers)
      .catch(console.warn);
  }, [setSellers]);

  return sellers;
};
