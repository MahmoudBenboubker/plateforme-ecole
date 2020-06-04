/* eslint-disable react/no-unescaped-entities */
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
import WarningIcon from '@material-ui/icons/Warning';

import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AdminNiveaux from '../../components/AdminNiveaux/Loadable';
import makeSelectAdminInterface, {
  selectClasses,
  selectModal,
  selectCurrentSousNiveau,
  selectModalDelete,
  selectCurrentClasse,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchNiveauxAction } from '../App/actions';
import {
  fetchClassesBySubNiveauAction,
  toggleModalAction,
  currentSubNiveauAction,
  createCoursName,
  currentClasseAction,
  toggleModalDeleteAction,
  deleteClasseAction,
} from './actions';
import CrudInterface from '../../components/CrudInterface/Loadable';
import CustomGrid from '../../components/CustomGrid';
import CustomModal from '../../components/CustomModal';
import useStyles from '../../components/Login/styles';
import {
  GreenButton,
  GreenButtonOutlined,
} from '../../components/CustomizedElements/CustomizedElements';
import { formHasErrors, mainColor } from '../../constants/constants';

export function AdminInterface({
  fetchNiveaux,
  niveauxSaga,
  fetchClasses,
  classesSaga,
  modalState,
  togglingModal,
  currentSousNiveau,
  clickSousNiveau,
  createCours,
  modalDeleteState,
  clickCours,
  togglingModalDelete,
  currentClasse,
  deleteCoursModal,
}) {
  useInjectReducer({ key: 'adminInterface', reducer });
  useInjectSaga({ key: 'adminInterface', saga });

  useEffect(() => {
    fetchNiveaux();
  }, []);

  const fetchClassesApi = id => {
    fetchClasses(id);
  };

  const currentingSousNiveau = (name, id, niveauName) => {
    clickSousNiveau(name, id, niveauName);
  };

  const currentingClasse = classe => {
    clickCours(classe);
    togglingModalDelete(true);
  };

  const classes = useStyles();

  const initialValues = {
    name: '',
  };

  const CreationSchema = Yup.object().shape({
    name: Yup.string().required('Champ obligatoire'),
  });

  const toToggleModal = state => {
    togglingModal(state);
  };

  return (
    <div>
      <Helmet>
        <title>Interface Admin</title>
        <meta name="description" content="Description of AdminInterface" />
      </Helmet>
      <div>
        <CustomGrid justify="center">
          <Grid style={{}} item>
            <AdminNiveaux
              niveaux={niveauxSaga}
              fetchClasses={fetchClassesApi}
              chooseSousNiveau={currentingSousNiveau}
            />
          </Grid>
          <Grid item style={{}}>
            <CrudInterface
              current={currentSousNiveau}
              classes={classesSaga}
              addCours={toToggleModal}
              deleteCours={currentingClasse}
            />
          </Grid>
        </CustomGrid>
      </div>
      {/* Modal Ajout */}
      <CustomModal
        open={modalState}
        id="create"
        maxWidth="800"
        title="Création classe"
        onClose={() => togglingModal(false)}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={CreationSchema}
          onSubmit={values => {
            createCours(values.name, currentSousNiveau);
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.container}>
                <div className={classes.subContainer}>
                  <div className={classes.textInformation}>
                    Veuillez entrer le nom d'une classe.
                  </div>
                  <div className={classes.rowContainer}>
                    <TextField
                      className={classes.field}
                      id="name"
                      label="Nom de la classe"
                      placeholder="Nom de la classe"
                      margin="dense"
                      onChange={handleChange}
                      helperText={errors.name && touched.name && errors.name}
                      error={errors.name && touched.name}
                      onBlur={handleBlur}
                      value={values.name}
                      type="text"
                      variant="outlined"
                      fullWidth
                      name="name"
                    />
                  </div>
                </div>
                <div
                  style={{ justifyContent: 'flex-end' }}
                  className={classes.rowButtonsContainer}
                >
                  <div className={classes.buttonContainer}>
                    <GreenButton
                      id="validerBtn"
                      style={{ marginRight: 0 }}
                      type="submit"
                      disabled={
                        formHasErrors(errors) || values === initialValues
                      }
                    >
                      Valider
                    </GreenButton>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </CustomModal>
      {/* Modal Suppression */}
      <CustomModal
        open={modalDeleteState}
        id="delete"
        maxWidth="800"
        title="Suppression de classe"
        onClose={() => togglingModalDelete(false)}
      >
        <div className={classes.container}>
          <div className={classes.subContainer}>
            <div
              style={{
                textAlign: 'center',
                padding: '18px 0',
              }}
            >
              <WarningIcon fontSize="large" htmlColor={mainColor} />
            </div>
            <div className={classes.textInformation}>
              Voulez-vous vraiment supprimer la classe{' '}
              <b>{currentClasse.name}</b>?
            </div>
            <div
              style={{ justifyContent: 'flex-end' }}
              className={classes.rowButtonsContainer}
            >
              <div className={classes.buttonContainer}>
                <GreenButtonOutlined
                  onClick={() => togglingModalDelete(false)}
                  id="cancelLogout"
                >
                  Annuler
                </GreenButtonOutlined>
                <GreenButton
                  id="validerBtn"
                  style={{ marginRight: 0 }}
                  type="submit"
                  onClick={() => deleteCoursModal(currentClasse)}
                >
                  Supprimer
                </GreenButton>
              </div>
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}

AdminInterface.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  fetchNiveaux: PropTypes.func.isRequired,
  fetchClasses: PropTypes.func.isRequired,
  niveauxSaga: PropTypes.array.isRequired,
  classesSaga: PropTypes.array.isRequired,
  modalState: PropTypes.bool.isRequired,
  modalDeleteState: PropTypes.bool.isRequired,
  togglingModal: PropTypes.func.isRequired,
  togglingModalDelete: PropTypes.func.isRequired,
  currentSousNiveau: PropTypes.string.isRequired,
  currentClasse: PropTypes.string.isRequired,
  clickSousNiveau: PropTypes.func.isRequired,
  clickCours: PropTypes.func.isRequired,
  createCours: PropTypes.func.isRequired,
  deleteCoursModal: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adminInterface: makeSelectAdminInterface(),
  niveauxSaga: selectShowNiveaux(),
  classesSaga: selectClasses(),
  modalState: selectModal(),
  modalDeleteState: selectModalDelete(),
  currentSousNiveau: selectCurrentSousNiveau(),
  currentClasse: selectCurrentClasse(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchNiveaux: fetchNiveauxAction,
      fetchClasses: fetchClassesBySubNiveauAction,
      togglingModal: toggleModalAction,
      togglingModalDelete: toggleModalDeleteAction,
      clickSousNiveau: currentSubNiveauAction,
      createCours: createCoursName,
      clickCours: currentClasseAction,
      deleteCoursModal: deleteClasseAction,
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
