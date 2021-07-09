import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Constructor,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  Register,
  ResetPassword,
} from '../../pages';
import AppHeader from '../app-header/app-header';
import { ProtectedRoute } from '../protected-route/protected-route';
import { ProtectedRouteAuthorized } from '../protected-route-authorized/protected-route-authorized';
import { ProtectedRouteWithReset } from '../protected-route-with-reset/protected-route-with-reset';
import { useDispatch } from 'react-redux';
import { getUserInfoRequest } from '../../services/slices/user';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoRequest());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <AppHeader />

        <Switch>
          <Route path="/" exact>
            <Constructor />
          </Route>
          <ProtectedRouteAuthorized path="/login" exact>
            <Login />
          </ProtectedRouteAuthorized>
          <ProtectedRouteAuthorized path="/register" exact>
            <Register />
          </ProtectedRouteAuthorized>
          <ProtectedRouteAuthorized path="/forgot-password" exact>
            <ForgotPassword />
          </ProtectedRouteAuthorized>
          <ProtectedRouteWithReset path="/reset-password" exact>
            <ResetPassword />
          </ProtectedRouteWithReset>
          <Route path="/feed" exact>
            <Feed />
          </Route>
          <Route path="/feed/:id" exact>
            {/*<FeedOrder />*/}
          </Route>
          <ProtectedRoute path="/profile" exact>
            <Profile />
          </ProtectedRoute>
          <Route path="/profile/orders" exact>
            {/*<History />*/}
          </Route>
          <Route path="/profile/orders/:id" exact>
            {/*<HistoryOrder />*/}
          </Route>
          <Route path="/ingredients/:id" exact>
            {/*<IngredientPage />*/}
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
