import React, { useState } from 'react';
import { LatLngTuple } from 'leaflet';

import { usePosition } from '../service/position';
import { useStoredState } from '../service/storage';
import { useProducers } from '../model/producer';
import { useSellers, Seller } from '../model/seller';
import CustomMap from '../component/Map';
import ProducerMarker from '../component/ProducerMarker';
import SellerMarker from '../component/SellerMarker';

const SellerDialog = React.lazy(() => import('../component/SellerDialog'));

const MapView: React.FC = function() {
  const [position, setPosition] = useStoredState<LatLngTuple>('position');
  const currentPosition = usePosition();
  const mapPosition = position || currentPosition || [51.505, -0.09];

  const producers = useProducers();
  const sellers = useSellers();

  const [selectedSeller, setSelectedSeller] = useState<Seller>();

  return (
    <React.Fragment>
      <CustomMap position={mapPosition} onChangePosition={setPosition}>
        {sellers?.map((seller) => (
          <SellerMarker key={seller.id} seller={seller} onClick={setSelectedSeller} />
        ))}
        {producers?.map((producer) => (
          <ProducerMarker key={producer.id} producer={producer} />
        ))}
      </CustomMap>
      <React.Suspense fallback={null}>
        <SellerDialog seller={selectedSeller} onClose={() => setSelectedSeller(undefined)} />
      </React.Suspense>
    </React.Fragment>
  );
};

export default MapView;
