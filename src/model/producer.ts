import { LatLngTuple } from 'leaflet';
import { useState, useEffect } from 'react';
import { get } from '../service/server';

export type Producer = {
  id: string;
  name: string;
  position: LatLngTuple;
  address: string;
};

export const useProducers = function(): Producer[] | undefined {
  const [producers, setProducers] = useState();

  useEffect(() => {
    get('api/producers/list.json')
      .then(setProducers)
      .catch(console.warn);
  }, [setProducers]);

  return producers;
};
