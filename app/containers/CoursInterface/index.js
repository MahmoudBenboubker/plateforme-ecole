/* eslint-disable react/prop-types */
/**
 *
 * CoursInterface
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCoursInterface, {
  selectToggleModal,
  selectDocuments,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import useStyles from '../../components/CoursFilter/styles';
import { GreenButton } from '../../components/CustomizedElements/CustomizedElements';
import CustomGrid from '../../components/CustomGrid';
import CustomModal from '../../components/CustomModal';
import CrudCours from '../../components/CrudCours';
import CreateCours from '../../components/CreateCours';
import {
  toggleModalAction,
  fetchDocuments,
  createDocumentAction,
} from './actions';

export function CoursInterface({
  toggleModal,
  modalState,
  match,
  fetchDocs,
  documents,
  createDocument,
}) {
  useInjectReducer({ key: 'coursInterface', reducer });
  useInjectSaga({ key: 'coursInterface', saga });

  useEffect(() => {
    fetchDocs(match.params.idClasse);
  }, []);

  const funcCreateDocument = payload => {
    createDocument(payload, match.params.idClasse);
  };
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Gestion des Cours</title>
        <meta name="description" content="Description of CoursInterface" />
      </Helmet>
      <Paper
        square
        classes={{ elevation1: classes.paperShadow }}
        className={classes.paper}
        style={{ margin: 8, marginBottom: 24 }}
      >
        <CustomGrid justify="space-between">
          <Grid item>
            <div className={classes.myActions}>NIVEAUX / SOUS NIVEAUX</div>
          </Grid>
          <Grid item>
            <GreenButton
              id="validerBtn"
              style={{ marginRight: 17, width: '200px' }}
              onClick={() => toggleModal(true)}
            >
              Ajouter Document
            </GreenButton>
          </Grid>
        </CustomGrid>
      </Paper>
      <CrudCours documents={documents} />
      <CustomModal
        open={modalState}
        id="create"
        title="Créer document"
        onClose={() => toggleModal(false)}
      >
        <CreateCours
          createDoc={funcCreateDocument}
          close={() => toggleModal(false)}
        />
      </CustomModal>
    </div>
  );
}

CoursInterface.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  fetchDocs: PropTypes.func.isRequired,
  createDocument: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  documents: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  coursInterface: makeSelectCoursInterface(),
  modalState: selectToggleModal(),
  documents: selectDocuments(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleModal: toggleModalAction,
      fetchDocs: fetchDocuments,
      createDocument: createDocumentAction,
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
)(CoursInterface);
