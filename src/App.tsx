import React from 'react';
import Loader from './component/Loader';
import './App.css';

const Map = React.lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2500)).then(() => import('./view/Map')),
);

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Map />
    </React.Suspense>
  );
};

export default App;
