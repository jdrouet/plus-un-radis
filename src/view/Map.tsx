import React, { useCallback, useState } from 'react';
import { LatLngTuple } from 'leaflet';

import { usePosition } from '../service/position';
import { useStoredState } from '../service/storage';
import { useProducers, Producer } from '../model/producer';
import { useSellers, Seller } from '../model/seller';
import CustomMap from '../component/Map';
import ProducerMarker from '../component/ProducerMarker';
import SellerMarker from '../component/SellerMarker';

const ProducerDialog = React.lazy(() => import('../component/ProducerDialog'));
const SellerDialog = React.lazy(() => import('../component/SellerDialog'));

enum EntityType {
  Producer,
  Seller,
}

type EntityHolder = {
  value: Seller | Producer;
  type: EntityType;
};

const MapView: React.FC = function() {
  const [position, setPosition] = useStoredState<LatLngTuple>('position');
  const currentPosition = usePosition();
  const mapPosition = position || currentPosition || [51.505, -0.09];

  const producers = useProducers();
  const sellers = useSellers();

  const [selected, setSelected] = useState<EntityHolder>();

  const handleSelectProducer = useCallback(
    (value: Producer) =>
      setSelected({
        value,
        type: EntityType.Producer,
      }),
    [setSelected],
  );
  const handleSelectSeller = useCallback(
    (value: Seller) => setSelected({ value, type: EntityType.Seller }),
    [setSelected],
  );

  return (
    <React.Fragment>
      <CustomMap position={mapPosition} onChangePosition={setPosition}>
        {sellers?.map((seller) => (
          <SellerMarker key={seller.id} value={seller} onClick={handleSelectSeller} />
        ))}
        {producers?.map((producer) => (
          <ProducerMarker key={producer.id} value={producer} onClick={handleSelectProducer} />
        ))}
      </CustomMap>
      <React.Suspense fallback={null}>
        {selected && selected.type === EntityType.Seller ? (
          <SellerDialog seller={selected.value} onClose={() => setSelected(undefined)} />
        ) : null}
        {selected && selected.type === EntityType.Producer ? (
          <ProducerDialog producer={selected.value} onClose={() => setSelected(undefined)} />
        ) : null}
      </React.Suspense>
    </React.Fragment>
  );
};

export default MapView;
