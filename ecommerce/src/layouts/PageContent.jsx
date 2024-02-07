import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//Pages
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import PaymentOptions from "../components/PaymentOptions";
import PrivateRoute from "../layouts/PrivateRoute";
import OrdersPage from "../pages/OrdersPage";

export default function PageContent() {
  return (
    <div>
      <Switch>
        <PrivateRoute path="/payment" component={() => <PaymentOptions />} />
        <Route path="/orders" exact>
          <OrdersPage />
        </Route>
        <Route path="/cart" exact>
          <ShoppingCartPage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/shopping/:cat/:id/:name" exact>
          <Product />
        </Route>
        <Route path="/shopping" exact>
          <ProductList />
        </Route>
        <Route path="/shopping/:gen/:cat" exact>
          <ProductList />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}
