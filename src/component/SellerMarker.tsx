import React from 'react';
import L from 'leaflet';
import { Marker } from 'react-leaflet';
import { Seller } from '../model/seller';

export type SellerMarkerProps = {
  seller: Seller;
};

export const sellerIcon = new L.Icon({
  iconAnchor: [0, 0],
  iconSize: [32, 32],
  iconUrl: 'image/033-stall.svg',
});

const SellerMarker: React.FC<SellerMarkerProps> = function(props) {
  return <Marker icon={sellerIcon} position={props.seller.position} />;
};

export default SellerMarker;
