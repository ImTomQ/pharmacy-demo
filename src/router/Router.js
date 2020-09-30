import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import {routes} from './index';
import {routesSubmenu} from './index';
import AddNewProduct from '../pages/product/addNewProduct';
import DetailProduct from '../pages/product/detailProduct';
import EditProduct from '../pages/product/editProduct';
import DeleteProduct from '../pages/product/deleteProduct';

function Routers() {

  return (
    <>
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

        <Route path="/add-new-product" exact component={AddNewProduct}/>
            <Route path="/detail-product" component={DetailProduct}/>
            <Route path="/edit-product" component={EditProduct}/>
            <Route path="/delete-product" component={DeleteProduct}/>
      </Switch>
    </>
  );
}

export default Routers;
