import React from 'react';
import { useRouteMatch } from 'react-router-dom';
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

type EntityParams = {
  id?: string;
};

export const useSelectedEntity = function(
  producers: Producer[] | undefined,
  sellers: Seller[] | undefined,
): EntityHolder | undefined {
  const matchProducers = useRouteMatch<EntityParams>('/map/producers/:id');
  const matchSellers = useRouteMatch<EntityParams>('/map/sellers/:id');
  if (matchProducers) {
    const value = producers?.find((item) => item.id === matchProducers.params.id) as Producer;
    if (!value) return undefined;
    return { value, type: EntityType.Producer };
  }
  if (matchSellers) {
    const value = sellers?.find((item) => item.id === matchSellers.params.id) as Producer;
    if (!value) return undefined;
    return { value, type: EntityType.Seller };
  }
  return undefined;
};

const MapView: React.FC = function() {
  const [position, setPosition] = useStoredState<LatLngTuple>('position');
  const currentPosition = usePosition();
  const mapPosition = position || currentPosition || [51.505, -0.09];

  const producers = useProducers();
  const sellers = useSellers();
  const selected = useSelectedEntity(producers, sellers);

  const handleSelectProducer = (value: Producer) => {
    window.location.hash = `/map/producers/${value.id}`;
  };
  const handleSelectSeller = (value: Seller) => {
    window.location.hash = `/map/sellers/${value.id}`;
  };
  const handleUnselect = () => {
    window.location.hash = `/map`;
  };

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
        {selected?.type === EntityType.Seller ? (
          <SellerDialog seller={selected.value} onClose={handleUnselect} />
        ) : null}
        {selected?.type === EntityType.Producer ? (
          <ProducerDialog producer={selected.value} onClose={handleUnselect} />
        ) : null}
      </React.Suspense>
    </React.Fragment>
  );
};

export default MapView;
