import React, { useCallback, useState, ReactNode } from 'react';
import { useDebounceCallback } from '@react-hook/debounce';
import { LatLngTuple } from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';
import 'leaflet/dist/leaflet.css';

export type CustomMapType = {
  children?: ReactNode;
  onChangePosition: (position: LatLngTuple) => any | undefined;
  position: LatLngTuple;
};

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}));

const CustomMap: React.FC<CustomMapType> = ({ children, onChangePosition, position }) => {
  const classes = useStyles();

  const [zoom, setZoom] = useState(13);

  const handleMoveEnd = useCallback(
    (event) => {
      const center = event.target.getCenter();
      onChangePosition([center.lat, center.lng]);
    },
    [onChangePosition],
  );

  const handleZoomEnd = useCallback((event) => setZoom(event.target.getZoom()), [setZoom]);

  const handleMoveEndDebounce = useDebounceCallback(handleMoveEnd, 250);
  const handleZoomEndDebounce = useDebounceCallback(handleZoomEnd, 250);

  return (
    <Map
      className={classes.root}
      center={position}
      onMoveEnd={handleMoveEndDebounce}
      onZoomEnd={handleZoomEndDebounce}
      zoom={zoom}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </Map>
  );
};

export default CustomMap;
