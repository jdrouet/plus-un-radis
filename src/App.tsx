import React from 'react';
import Loader from './component/Loader';
import { usePosition } from './service/position';
import './App.css';

const Map = React.lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2500))
    .then(() => import('./component/Map')));

const App: React.FC = () => {
  const position = usePosition();
  return (
    <React.Suspense fallback={<Loader />}>
      <Map className="App-map" position={position} />
    </React.Suspense>
  );
}

export default App;
