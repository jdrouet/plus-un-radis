import React, { useCallback } from 'react';
import L from 'leaflet';
import { Marker } from 'react-leaflet';
import { Entity } from '../model/entity';

export type EntityMarkerProps<T extends Entity> = {
  value: T;
  onClick: (value: T) => any;
};

export type EntityMarkerBaseProps<T extends Entity> = EntityMarkerProps<T> & {
  icon: L.Icon;
};

const EntityMarker = function<T extends Entity>(props: EntityMarkerBaseProps<T>) {
  const { value, onClick } = props;
  const handleClick = useCallback(() => onClick(value), [onClick, value]);
  return <Marker icon={props.icon} position={value.position} onClick={handleClick} />;
};

export default EntityMarker;
