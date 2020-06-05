/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NoAuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated === true ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

export default NoAuthRoute;
