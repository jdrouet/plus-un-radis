import React from 'react';
import { Marker } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

import { usePositionEffect } from '../service/position';
import { useStoredState } from '../service/storage';
import { useSellers } from '../model/seller';
import CustomMap from '../component/Map';

const MapView: React.FC = function() {
  const sellers = useSellers();
  const [position, setPosition] = useStoredState<LatLngTuple>('position', [51.505, -0.09]);

  usePositionEffect(setPosition);

  return (
    <CustomMap position={position} onChangePosition={setPosition}>
      {sellers?.map((seller) => (
        <Marker key={seller.id} position={seller.position} />
      ))}
    </CustomMap>
  );
};

export default MapView;
