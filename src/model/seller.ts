import { useState, useEffect } from 'react';
import { get } from '../service/server';
import { Entity } from './entity';

export type Seller = Entity;

export const useSellers = function(): Seller[] | undefined {
  const [sellers, setSellers] = useState();

  useEffect(() => {
    get('api/sellers/list.json')
      .then(setSellers)
      .catch(console.warn);
  }, [setSellers]);

  return sellers;
};
