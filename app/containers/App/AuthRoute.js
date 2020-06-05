/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default AuthRoute;
