import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Constructor, Feed, ForgotPassword, Login, NotFound404, Register, ResetPassword } from '../../pages';
import AppHeader from '../app-header/app-header';

const App = () => (
  <>
    <BrowserRouter>
      <AppHeader />

      <Switch>
        <Route path="/" exact>
          <Constructor />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="/feed/:id">{/*<FeedOrder />*/}</Route>
        <Route path="/profile">{/*<Profile />*/}</Route>
        <Route path="/profile/orders">{/*<History />*/}</Route>
        <Route path="/profile/orders/:id">{/*<HistoryOrder />*/}</Route>
        <Route path="/ingredients/:id">{/*<IngredientPage />*/}</Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
