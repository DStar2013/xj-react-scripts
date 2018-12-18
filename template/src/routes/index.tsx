import * as React from 'react';
import { Route, Switch } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import { ROOT } from "constants/config/base";

import Home from 'pages/Home';

export const history = createBrowserHistory({
  basename: ROOT
});

export function getRoutes(store: any) {
  return (
    <Switch>
      <Route exact={ true } path="/" component={ Home }/>
    </Switch>
  );
}