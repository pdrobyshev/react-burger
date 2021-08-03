import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from '../../services/store';

interface CustomizedState {
  from: string;
}

export const ProtectedRouteWithReset: FC<RouteProps> = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const state = location.state as CustomizedState;
        return isLoggedIn || state?.from !== '/forgot-password' ? <Redirect to="/" /> : children;
      }}
    />
  );
};
