/**
 *
 * AdminInterface
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { selectShowNiveaux } from 'containers/App/selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Grid from '@material-ui/core/Grid';

import AdminNiveaux from '../../components/AdminNiveaux/Loadable';
import makeSelectAdminInterface from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchNiveauxAction } from '../App/actions';
import { fetchClassesBySubNiveauAction } from './actions';
import CrudInterface from '../../components/CrudInterface/Loadable';
import CustomGrid from '../../components/CustomGrid';

export function AdminInterface({ fetchNiveaux, niveauxSaga, fetchClasses }) {
  useInjectReducer({ key: 'adminInterface', reducer });
  useInjectSaga({ key: 'adminInterface', saga });

  useEffect(() => {
    fetchNiveaux();
  }, []);

  const fetchClassesApi = id => {
    fetchClasses(id);
  };

  return (
    <div>
      <Helmet>
        <title>Interface Admin</title>
        <meta name="description" content="Description of AdminInterface" />
      </Helmet>
      <div>
        <CustomGrid justify="flex-start">
          <Grid item>
            <AdminNiveaux
              niveaux={niveauxSaga}
              fetchClasses={fetchClassesApi}
            />
          </Grid>
          <Grid item>
            <div style={{ width: '100%', height: '100%' }}>
              <CrudInterface />
            </div>
          </Grid>
        </CustomGrid>
      </div>
    </div>
  );
}

AdminInterface.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  fetchNiveaux: PropTypes.func.isRequired,
  fetchClasses: PropTypes.func.isRequired,
  niveauxSaga: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adminInterface: makeSelectAdminInterface(),
  niveauxSaga: selectShowNiveaux(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchNiveaux: fetchNiveauxAction,
      fetchClasses: fetchClassesBySubNiveauAction,
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
)(AdminInterface);
