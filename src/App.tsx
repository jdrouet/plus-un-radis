import React from 'react';
import Loader from './component/Loader';
import './App.css';

const Map = React.lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2500))
    .then(() => import('./component/Map')));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Map className="App-map" />
    </React.Suspense>
  );
}

export default App;
