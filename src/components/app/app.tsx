import React, { FC, useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store';
import { Location } from 'history';

import { getCookie } from '../../utils/cookie';
import { getIngredients } from '../../services/slices/burger/burger';
import { getUserInfoRequest } from '../../services/slices/user/user';
import { resetOrder } from '../../services/slices/order/order';

import {
  Constructor,
  Feed,
  FeedOrder,
  ForgotPassword,
  History,
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
import { FeedModal } from '../feed-modal/feed-modal';

interface ILocationState extends Location {
  background?: Location<unknown>;
}

const App: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<ILocationState>();
  const history = useHistory();
  const accessToken = getCookie('accessToken');
  const { ingredients, isLoading } = useSelector((state) => state.burger);
  const background = history.action === 'PUSH' && location.state && location.state.background;

  useEffect(() => {
    !ingredients.length && dispatch(getIngredients());
    accessToken && dispatch(getUserInfoRequest());
  }, [dispatch, accessToken, ingredients]);

  const onModalClose = () => history.goBack();
  const onOrderInfoModalClose = () => {
    dispatch(resetOrder());
    history.goBack();
  };

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
            <Route exact path="/ingredients/:id">
              <Ingredient />
            </Route>
            <Route exact path="/feed">
              <Feed />
            </Route>
            <Route exact path="/feed/:id">
              <FeedOrder />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile/orders">
              <History />
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile/orders/:id">
              <FeedOrder />
            </ProtectedRoute>
            <Route>
              <NotFound404 />
            </Route>
          </Switch>

          {background && (
            <Switch>
              <Route exact path="/ingredients/:id">
                <Modal title="???????????? ??????????????????????" onModalClose={onModalClose}>
                  <IngredientDetails />
                </Modal>
              </Route>
              <Route exact path="/feed/:id">
                <FeedModal onModalClose={onOrderInfoModalClose} />
              </Route>
              <ProtectedRoute exact path="/profile/orders/:id">
                <FeedModal onModalClose={onOrderInfoModalClose} />
              </ProtectedRoute>
            </Switch>
          )}
        </>
      )}
    </>
  );
};

export default App;
