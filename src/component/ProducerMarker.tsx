import React from 'react';
import L from 'leaflet';
import { Producer } from '../model/producer';
import EntityMarker, { EntityMarkerProps } from './EntityMarker';

export type ProducerMarkerProps = EntityMarkerProps<Producer>;

export const producerIcon = new L.Icon({
  iconAnchor: [0, 0],
  iconSize: [32, 32],
  iconUrl: 'image/040-farmer.svg',
});

const ProducerMarker: React.FC<ProducerMarkerProps> = function({ onClick, value }) {
  return <EntityMarker icon={producerIcon} value={value} onClick={onClick} />;
};

export default ProducerMarker;
