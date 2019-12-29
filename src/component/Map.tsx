import React, { ReactNode } from 'react';
import { LatLngTuple } from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export type CustomMapType = {
  className?: string,
  children?: ReactNode,
  position?: LatLngTuple,
};

const CustomMap: React.FC<CustomMapType> = (props) => {
  const position: LatLngTuple = props.position || [51.505, -0.09];
  return (
    <Map className={props.className} center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {props.children}
    </Map>
  );
}

export default CustomMap;
