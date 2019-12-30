import { LatLngTuple } from 'leaflet';

export type Entity = {
  id: string;
  name: string;
  position: LatLngTuple;
  address: string;
};
