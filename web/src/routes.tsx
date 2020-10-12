import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Landing, OrphanagesMap } from './pages';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/orphanages" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
