import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Constructor, Feed, ForgotPassword, Login, Register, ResetPassword } from '../../pages';
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
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgotPassword />
        </Route>
        <Route path="/reset-password" exact>
          <ResetPassword />
        </Route>
        <Route path="/feed" exact>
          <Feed />
        </Route>
        <Route path="/feed/:id" exact>
          {/*<FeedOrder />*/}
        </Route>
        <Route path="/profile" exact>
          {/*<Profile />*/}
        </Route>
        <Route path="/profile/orders" exact>
          {/*<History />*/}
        </Route>
        <Route path="/profile/orders/:id" exact>
          {/*<HistoryOrder />*/}
        </Route>
        <Route path="/ingredients/:id" exact>
          {/*<IngredientPage />*/}
        </Route>
        <Route>{/*<NotFound404 />*/}</Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
