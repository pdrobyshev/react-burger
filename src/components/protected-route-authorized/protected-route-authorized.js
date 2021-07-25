import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRouteAuthorized = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <Route {...rest} render={() => (isLoggedIn ? <Redirect to="/" /> : children)} />;
};

ProtectedRouteAuthorized.propTypes = {
  children: PropTypes.element.isRequired,
};
