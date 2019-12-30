import { Entity } from '../model/entity';

export const getUrlToAddress = function(entity: Entity): string {
  const fullAddress = `${entity.name}, ${entity.address}`;
  return `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;
};
