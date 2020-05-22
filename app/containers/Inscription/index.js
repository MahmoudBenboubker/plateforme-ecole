/**
 *
 * Inscription
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectInscription from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Inscription() {
  useInjectReducer({ key: 'inscription', reducer });
  useInjectSaga({ key: 'inscription', saga });

  return (
    <div>
      <Helmet>
        <title>Inscription</title>
        <meta name="description" content="Description of Inscription" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Inscription.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  inscription: makeSelectInscription(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Inscription);
