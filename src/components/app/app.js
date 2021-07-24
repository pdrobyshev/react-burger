import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserInfoRequest } from '../../services/slices/user';
import { getCookie } from '../../utils/cookie';
import { getIngredients } from '../../services/slices/burger';

import {
  Constructor,
  Feed,
  FeedOrder,
  ForgotPassword,
  History,
  HistoryOrder,
  Ingredient,
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
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import Loader from '../loader/loader';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const accessToken = getCookie('accessToken');
  const { isLoading } = useSelector((state) => state.burger);
  const ingredients = useSelector((state) => state.burger.ingredients);
  const background = history.action === 'PUSH' && location.state && location.state.background;

  useEffect(() => {
    !ingredients.length && dispatch(getIngredients());
    accessToken && dispatch(getUserInfoRequest());
  }, [dispatch, accessToken, ingredients]);

  const onIngredientModalClose = () => history.goBack();

  return (
    <>
      <AppHeader />

      {isLoading && <Loader />}

      {!!ingredients.length && (
        <>
          <Switch location={background || location}>
            <Route exact path="/">
              <Constructor />
            </Route>
            <ProtectedRouteAuthorized exact path="/login">
              <Login />
            </ProtectedRouteAuthorized>
            <ProtectedRouteAuthorized exact path="/register">
              <Register />
            </ProtectedRouteAuthorized>
            <ProtectedRouteAuthorized exact path="/forgot-password">
              <ForgotPassword />
            </ProtectedRouteAuthorized>
            <ProtectedRouteWithReset exact path="/reset-password">
              <ResetPassword />
            </ProtectedRouteWithReset>
            <Route exact path="/feed">
              <Feed />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile/orders">
              <History />
            </ProtectedRoute>
            <Route exact path="/ingredients/:id">
              <Ingredient />
            </Route>
            <Route exact path="/feed/:id">
              <FeedOrder />
            </Route>
            <ProtectedRoute exact path="/profile/orders/:id">
              <HistoryOrder />
            </ProtectedRoute>
            <Route>
              <NotFound404 />
            </Route>
          </Switch>

          {background && (
            <Route exact path="/ingredients/:id">
              <Modal title="Детали ингредиента" onModalClose={onIngredientModalClose}>
                <IngredientDetails />
              </Modal>
            </Route>
          )}
        </>
      )}
    </>
  );
};

export default App;
