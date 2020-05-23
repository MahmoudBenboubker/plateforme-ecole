/**
 *
 * Inscription
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import SignIn from '../../components/SignIn';

import makeSelectInscription from './selectors';
import reducer from './reducer';
import saga from './saga';
import { signInAction } from './actions';

export function Inscription({ signIn }) {
  useInjectReducer({ key: 'inscription', reducer });
  useInjectSaga({ key: 'inscription', saga });

  const signingIn = credentials => {
    signIn(credentials);
  };

  return (
    <div>
      <Helmet>
        <title>Inscription</title>
        <meta name="description" content="Description of Inscription" />
      </Helmet>
      <SignIn signIn={signingIn} />
    </div>
  );
}

Inscription.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  signIn: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  inscription: makeSelectInscription(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signIn: signInAction,
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
)(Inscription);
