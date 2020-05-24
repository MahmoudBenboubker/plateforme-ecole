/**
 *
 * ListCours
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectListCours from './selectors';
import reducer from './reducer';
import saga from './saga';

import CoursFilter from '../../components/CoursFilter/Loadable';

export function ListCours() {
  useInjectReducer({ key: 'listCours', reducer });
  useInjectSaga({ key: 'listCours', saga });

  return (
    <div>
      <Helmet>
        <title>Cours de Niveau/Sous Niveau</title>
        <meta name="description" content="Description of ListCours" />
      </Helmet>
      <CoursFilter />
    </div>
  );
}

ListCours.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listCours: makeSelectListCours(),
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
)(ListCours);