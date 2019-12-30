import { useState, useEffect } from 'react';
import { get } from '../service/server';
import { Entity } from './entity';

export type Producer = Entity;

export const useProducers = function(): Producer[] | undefined {
  const [producers, setProducers] = useState();

  useEffect(() => {
    get('api/producers/list.json')
      .then(setProducers)
      .catch(console.warn);
  }, [setProducers]);

  return producers;
};
