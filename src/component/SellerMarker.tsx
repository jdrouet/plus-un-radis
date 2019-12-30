import React from 'react';
import L from 'leaflet';
import { Seller } from '../model/seller';
import EntityMarker, { EntityMarkerProps } from './EntityMarker';

export type SellerMarkerProps = EntityMarkerProps<Seller>;

export const sellerIcon = new L.Icon({
  iconAnchor: [0, 0],
  iconSize: [32, 32],
  iconUrl: 'image/033-stall.svg',
});

const SellerMarker: React.FC<SellerMarkerProps> = function({ onClick, value }) {
  return <EntityMarker icon={sellerIcon} onClick={onClick} value={value} />;
};

export default SellerMarker;
