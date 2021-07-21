import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRouteAuthorized = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <Route {...rest} render={() => (isLoggedIn ? <Redirect to="/" /> : children)} />;
};
