import React from 'react';
import { LatLngTuple } from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

const App: React.FC = () => {
  const position: LatLngTuple = [51.505, -0.09];
  return (
    <Map className="App-map" center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
    </Map>
  );
}

export default App;
