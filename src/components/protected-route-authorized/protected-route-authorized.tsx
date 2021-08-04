import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from '../../services/store';

interface CustomizedState {
  from: { pathname: string };
}

export const ProtectedRouteAuthorized: FC<RouteProps> = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const state = location.state as CustomizedState;
        return isLoggedIn ? <Redirect to={state?.from?.pathname || '/'} /> : children;
      }}
    />
  );
};
