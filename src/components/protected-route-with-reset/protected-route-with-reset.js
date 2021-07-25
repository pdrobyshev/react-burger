import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRouteWithReset = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn || location.state?.from !== '/forgot-password' ? <Redirect to="/" /> : children
      }
    />
  );
};

ProtectedRouteWithReset.propTypes = {
  children: PropTypes.element.isRequired,
};
