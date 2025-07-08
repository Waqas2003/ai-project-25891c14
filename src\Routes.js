import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderManagementPage from './pages/OrderManagementPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/products/:id" component={ProductDetailsPage} />
      <Route exact path="/cart" component={ShoppingCartPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route exact path="/orders" component={OrderManagementPage} />
      <Route exact path="/admin" component={AdminDashboardPage} />
    </Switch>
  );
};

export default Routes;