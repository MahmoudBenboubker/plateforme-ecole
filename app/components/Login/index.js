/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  GreenButtonOutlined,
  GreenButton,
} from '../CustomizedElements/CustomizedElements';
import useStyles from './styles';
import { regexEmail, formHasErrors } from '../../constants/constants';
import CustomModal from '../CustomModal';

function Login({ open, closeModal, logInHandler }) {
  const classes = useStyles();

  const initialValues = {
    email: '',
    password: '',
  };

  const LoginProfileSchema = Yup.object().shape({
    email: Yup.string()
      .matches(regexEmail, 'Veuillez entrer une adresse email valide')
      .required('Champ obligatoire'),
    password: Yup.string().required('Champ obligatoire'),
  });

  return (
    <div>
      <CustomModal
        open={open}
        id="login"
        maxWidht="800"
        title="Connexion à l'interface"
        onClose={closeModal}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={LoginProfileSchema}
          onSubmit={values => {
            const login = {
              email: values.email,
              passwor: values.password,
            };
            logInHandler(login);
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
                    Veuillez entrer vos coordonnées.
                  </div>
                  <div className={classes.rowContainer}>
                    <TextField
                      className={classes.field}
                      id="email"
                      label="Adresse email"
                      placeholder="Adresse email"
                      margin="dense"
                      onChange={handleChange}
                      helperText={errors.email && touched.email && errors.email}
                      error={errors.email && touched.email}
                      onBlur={handleBlur}
                      value={values.email}
                      type="email"
                      variant="outlined"
                      fullWidth
                      name="email"
                    />
                  </div>
                  <div className={classes.rowContainer}>
                    <TextField
                      className={classes.field}
                      id="password"
                      label="Mot de passe"
                      placeholder="Mot de passe"
                      margin="dense"
                      type="password"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      value={values.password}
                      helperText={
                        errors.password && touched.password && errors.password
                      }
                      error={errors.password && touched.password}
                      onBlur={handleBlur}
                      name="password"
                    />
                  </div>
                </div>
                <div
                  style={{ justifyContent: 'flex-end' }}
                  className={classes.rowButtonsContainer}
                >
                  <div className={classes.buttonContainer}>
                    <GreenButtonOutlined
                      onClick={closeModal}
                      id="changePswdBtn"
                    >
                      Annuler
                    </GreenButtonOutlined>
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
    </div>
  );
}

Login.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  logInHandler: PropTypes.func,
};

export default memo(Login);
