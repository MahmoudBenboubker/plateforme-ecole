/* eslint-disable react/prop-types */
/**
 *
 * CoursInterface
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCoursInterface, {
  selectToggleModal,
  selectDocuments,
  selectToggleModalAdd,
  selectCurrentDoc,
  selectToggleModalDelete,
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
  toggleModalAddAction,
  uploadFileAction,
  toggleModalDeleteAction,
  deleteDocumentAction,
} from './actions';

export function CoursInterface({
  toggleModal,
  modalState,
  match,
  fetchDocs,
  documents,
  createDocument,
  toggleModalAdd,
  currentDoc,
  modalAddState,
  uploadFile,
  modalDeleteState,
  toggleModalDelete,
  deleteDocument,
}) {
  useInjectReducer({ key: 'coursInterface', reducer });
  useInjectSaga({ key: 'coursInterface', saga });

  useEffect(() => {
    fetchDocs(match.params.idClasse);
  }, []);

  const [formDataSend, setFormData] = useState({});

  const funcCreateDocument = payload => {
    createDocument(payload, match.params.idClasse);
  };
  const classes = useStyles();

  const handleFileUpload = event => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file, file.name);
    setFormData(formData);
  };

  const sendFile = () => {
    uploadFile(formDataSend, currentDoc);
  };

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
      <CrudCours
        documents={documents}
        deleteResource={toggleModalDelete}
        createResource={toggleModalAdd}
      />
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
      <CustomModal
        open={modalAddState}
        id="addDoc"
        title="Ajouter lien"
        onClose={() => toggleModalAdd(false, {})}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <TextField hidden="hidden" onChange={handleFileUpload} type="file" />
          <GreenButton onClick={sendFile}>Valider</GreenButton>
        </div>
      </CustomModal>

      <CustomModal
        open={modalDeleteState}
        id="supprimer"
        title="Supprimer document"
        onClose={() => toggleModalDelete(false, {})}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          Voulez-vous vraiment supprimer ce document ?
          <GreenButton
            style={{
              marginTop: 12,
            }}
            onClick={() => deleteDocument(currentDoc)}
          >
            Valider
          </GreenButton>
        </div>
      </CustomModal>
    </div>
  );
}

CoursInterface.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleModalAdd: PropTypes.func.isRequired,
  fetchDocs: PropTypes.func.isRequired,
  uploadFile: PropTypes.func.isRequired,
  createDocument: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  modalAddState: PropTypes.bool.isRequired,
  modalDeleteState: PropTypes.bool.isRequired,
  currentDoc: PropTypes.object.isRequired,
  documents: PropTypes.array.isRequired,
  deleteDocument: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  coursInterface: makeSelectCoursInterface(),
  modalState: selectToggleModal(),
  documents: selectDocuments(),
  modalAddState: selectToggleModalAdd(),
  modalDeleteState: selectToggleModalDelete(),
  currentDoc: selectCurrentDoc(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleModal: toggleModalAction,
      fetchDocs: fetchDocuments,
      createDocument: createDocumentAction,
      toggleModalAdd: toggleModalAddAction,
      uploadFile: uploadFileAction,
      toggleModalDelete: toggleModalDeleteAction,
      deleteDocument: deleteDocumentAction,
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
