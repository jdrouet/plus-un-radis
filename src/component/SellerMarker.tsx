import React, { useCallback } from 'react';
import L from 'leaflet';
import { Marker } from 'react-leaflet';
import { Seller } from '../model/seller';

export type SellerMarkerProps = {
  seller: Seller;
  onClick: (value: Seller) => any;
};

export const sellerIcon = new L.Icon({
  iconAnchor: [0, 0],
  iconSize: [32, 32],
  iconUrl: 'image/033-stall.svg',
});

const SellerMarker: React.FC<SellerMarkerProps> = function({ seller, onClick }) {
  const handleClick = useCallback(() => onClick(seller), [onClick, seller]);
  return <Marker icon={sellerIcon} onClick={handleClick} position={seller.position} />;
};

export default SellerMarker;
