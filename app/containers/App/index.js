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

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
// import Footer from 'components/Footer';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { niveaux } from '../../constants/constants';

import GlobalStyle from '../../global-styles';
import Login from '../../components/Login';

import { makeSelectToggleModalLogin } from './selectors';
import { toggleModalLoginAction } from './actions';
// eslint-disable-next-line import/no-unresolved

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export function App({ toggleModalLogin, openModalLogin }) {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - E-Plateforme" defaultTitle="E-Plateforme">
        <meta name="description" content="E-Plateforme" />
      </Helmet>
      <Header openModal={() => toggleModalLogin(true)} niveaux={niveaux} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {openModalLogin && (
        <Login open closeModal={() => toggleModalLogin(false)} />
      )}
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {
  toggleModalLogin: PropTypes.func,
  openModalLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  openModalLogin: makeSelectToggleModalLogin,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleModalLogin: toggleModalLoginAction,
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
