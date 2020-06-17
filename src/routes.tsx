import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import ListPoints from './pages/ListPoints';
import UpdatePoint from './pages/UpdatePoint';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={CreatePoint} path="/create-point" />
        <Route component={ListPoints} path="/points" />
        <Route component={UpdatePoint} path="/update-point/:id" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
