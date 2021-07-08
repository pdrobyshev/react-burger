import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRouteWithReset = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn || location.state?.from !== '/forgot-password' ? <Redirect to="/" /> : children
      }
    />
  );
};
