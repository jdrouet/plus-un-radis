import React from 'react';
import Loader from './component/Loader';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

const Map = React.lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2500)).then(() => import('./view/Map')),
);

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <React.Suspense fallback={<Loader />}>
            <Map />
          </React.Suspense>
        </Route>
        <Redirect to="/map" />
      </Switch>
    </Router>
  );
};

export default App;
