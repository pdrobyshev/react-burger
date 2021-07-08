import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? children : <Redirect to={{ pathname: '/', state: { from: location } }} />
      }
    />
  );
};
