import React from 'react';
import L from 'leaflet';
import { Marker } from 'react-leaflet';
import { Producer } from '../model/producer';

export type ProducerMarkerProps = {
  producer: Producer;
};

export const producerIcon = new L.Icon({
  iconAnchor: [0, 0],
  iconSize: [32, 32],
  iconUrl: 'image/040-farmer.svg',
});

const ProducerMarker: React.FC<ProducerMarkerProps> = function(props) {
  return <Marker icon={producerIcon} position={props.producer.position} />;
};

export default ProducerMarker;
