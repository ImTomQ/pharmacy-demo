import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import {routes} from './index';


function Routers() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => route.children ? (route.children.map((routeChildren, index) => (
            <Route
              key={index}
              path={routeChildren.path}
              exact
              component={routeChildren.component}
            />
            )))
          : (
            <Route
              key={index}
              path={route.path}
              exact
              component={route.component}
            />
            ))}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routers;
