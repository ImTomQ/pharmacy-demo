import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import {routes} from './index';
import {routesSubmenu} from './index';


function Routers() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map(route => route.children.map(childrenRoute => (
            <Route 
            path={childrenRoute.path}
            component={childrenRoute.component}
            />
            )))}
          {routesSubmenu.map(route => route.submenu.map(submenuRoute => submenuRoute.children.map(childrenRoute => (
            <Route
            path={childrenRoute.path}
            component={childrenRoute.component}
            />
            ))))}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routers;
