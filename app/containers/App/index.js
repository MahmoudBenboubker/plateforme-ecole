/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/Header';
// import Footer from 'components/Footer';
import CircularProgress from '@material-ui/core/CircularProgress';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Toastr from '../../components/Toastr/index';

import saga from './saga';
import reducer from './reducer';

import { niveaux } from '../../constants/constants';

import GlobalStyle from '../../global-styles';
import Login from '../../components/Login';

import {
  makeSelectToggleModalLogin,
  selectIsLoading,
  selectToasts,
  selectUserState,
} from './selectors';
import {
  toggleModalLoginAction,
  loginCredentialsAction,
  updateUserStateAction,
} from './actions';
// eslint-disable-next-line import/no-unresolved

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const loader = (
  <div
    style={{
      position: 'fixed',
      backgroundolor: 'transparent',
      width: '100%',
      height: '100%',
      zIndex: 99999,
    }}
  >
    <CircularProgress
      size={60}
      style={{
        position: 'fixed',
        color: '#00ff9c',
        left: 'calc(50%)',
        top: 'calc(40%)',
      }}
    />
  </div>
);

export function App({
  toggleModalLogin,
  openModalLogin,
  isLoading,
  loginCredentials,
  toasts,
  userState,
}) {
  const logIn = data => {
    loginCredentials(data);
  };

  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - E-Plateforme" defaultTitle="E-Plateforme">
        <meta name="description" content="E-Plateforme" />
      </Helmet>
      {isLoading === true ? loader : null}
      <div
        style={{
          color: '#485563',
          fontFamily: 'Montserrat',
          height: '100%',
        }}
      >
        {toasts.map((toast, index) => (
          <Toastr key={toast.id} index={index} {...toast} />
        ))}
        <Header
          openModal={() => toggleModalLogin(true)}
          niveaux={niveaux}
          userState={userState}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        {openModalLogin && (
          <Login
            open
            logInHandler={logIn}
            closeModal={() => toggleModalLogin(false)}
          />
        )}
        {/* <Footer /> */}
        <GlobalStyle />
      </div>
    </AppWrapper>
  );
}

App.propTypes = {
  toggleModalLogin: PropTypes.func,
  openModalLogin: PropTypes.bool.isRequired,
  loginCredentials: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  toasts: PropTypes.array.isRequired,
  userState: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  openModalLogin: makeSelectToggleModalLogin,
  isLoading: selectIsLoading,
  toasts: selectToasts,
  userState: selectUserState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleModalLogin: toggleModalLoginAction,
      loginCredentials: loginCredentialsAction,
      updateUserState: updateUserStateAction,
    },
    dispatch,
  );

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
