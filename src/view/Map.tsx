import React from 'react';
import { LatLngTuple } from 'leaflet';

import { usePosition } from '../service/position';
import { useStoredState } from '../service/storage';
import { useSellers } from '../model/seller';
import CustomMap from '../component/Map';
import SellerMarker from '../component/SellerMarker';

const MapView: React.FC = function() {
  const sellers = useSellers();
  const [position, setPosition] = useStoredState<LatLngTuple>('position');
  const currentPosition = usePosition();

  const mapPosition = position || currentPosition || [51.505, -0.09];

  return (
    <CustomMap position={mapPosition} onChangePosition={setPosition}>
      {sellers?.map((seller) => (
        <SellerMarker key={seller.id} seller={seller} />
      ))}
    </CustomMap>
  );
};

export default MapView;
