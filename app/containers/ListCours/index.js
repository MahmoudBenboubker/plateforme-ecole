/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/**
 *
 * ListCours
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

import CoursFilter from '../../components/CoursFilter/Loadable';
import CoursCard from '../../components/CoursCard/Loadable';
import CustomGrid from '../../components/CustomGrid';
import {
  fetchClassesBySubNiveauAction,
  fetchDocsByClasseAction,
  eraseDocsAction,
} from './actions';
import { selectClasses, selectDocuments } from './selectors';

export function ListCours({
  match,
  fetchClasses,
  classesSaga,
  fetcDocs,
  documentsSaga,
  eraseDocs,
}) {
  useInjectReducer({ key: 'listCours', reducer });
  useInjectSaga({ key: 'listCours', saga });

  const coursFilter = filter => {
    fetcDocs(filter);
  };

  useEffect(() => {
    fetchClasses(match.params.idSubNiveau);
    if (documentsSaga.length !== 0) {
      eraseDocs();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Cours de Niveau/Sous Niveau</title>
        <meta name="description" content="Description of ListCours" />
      </Helmet>
      <CoursFilter classesSub={classesSaga} filter={coursFilter} />
      <Alert style={{ width: '100%' }} severity="warning">
        Veuillez choisir une classe pour consulter ses documents. Si la liste
        retournée est vide, aucun document est disponible actuellement.
      </Alert>
      <div style={{ marginLeft: 8 }}>
        {documentsSaga && (
          <CustomGrid justify="flex-start">
            {documentsSaga.map(doc => (
              <Grid item>
                <CoursCard document={doc} />
              </Grid>
            ))}
          </CustomGrid>
        )}
      </div>
    </div>
  );
}

ListCours.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  fetchClasses: PropTypes.func.isRequired,
  classesSaga: PropTypes.array.isRequired,
  fetcDocs: PropTypes.func.isRequired,
  eraseDocs: PropTypes.func.isRequired,
  documentsSaga: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  classesSaga: selectClasses(),
  documentsSaga: selectDocuments(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchClasses: fetchClassesBySubNiveauAction,
      fetcDocs: fetchDocsByClasseAction,
      eraseDocs: eraseDocsAction,
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
)(ListCours);
