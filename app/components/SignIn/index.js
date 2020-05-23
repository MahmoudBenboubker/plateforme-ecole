/* eslint-disable react/no-unescaped-entities */
/**
 *
 * SignIn
 *
 */

import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik } from 'formik';
import students from '../../images/students.svg';
import { GreenButton } from '../CustomizedElements/CustomizedElements';
import { Container } from './styled';
import { regexEmail, formHasErrors } from '../../constants/constants';

function SignIn({ signIn }) {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .required('Champ obligatoire')
      .matches(regexEmail, 'Adresse email invalide'),
    password: Yup.string()
      .required('Champ obligatoire')
      .min(7, 'Au minimum 7 caractères'),
    confirmPassword: Yup.string()
      .required('Champ obligatoire')
      .oneOf([Yup.ref('password')], 'Mots de passes sont différents'),
  });

  return (
    <div>
      <div style={{ marginTop: '2%' }} />
      <Container>
        <div className="pictureContactUs">
          <img
            src={students}
            style={{ width: '100%', height: '100%' }}
            alt="students"
          />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={values => {
            const signin = {
              email: values.email,
              password: values.password,
              confirmPassword: values.confirmPassword,
              handle: values.email,
            };
            signIn(signin);
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
              <div
                className="formContainer"
                style={{ marginTop: 32, marginLeft: 32, fontSize: 24 }}
              >
                <div>
                  <div className="infoText" style={{ marginBottom: 24 }}>
                    <span style={{ fontWeight: 'bold' }}> Inscription </span>
                    <br />
                    Veuillez remplir vos coordonnées :
                  </div>
                  <div className="margin-bottom">
                    <TextField
                      id="email"
                      label="Email*"
                      type="email"
                      name="email"
                      style={{ width: 300, marginRight: 24 }}
                      variant="outlined"
                      margin="dense"
                      onChange={handleChange}
                      helperText={errors.email && touched.email && errors.email}
                      error={errors.email && touched.email}
                      onBlur={handleBlur}
                      value={values.email}
                      fullWidth
                    />
                  </div>
                  <div className="margin-bottom">
                    <TextField
                      id="password"
                      label="Mot de passe*"
                      type="password"
                      name="password"
                      style={{ width: 300, marginRight: 24 }}
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      onChange={handleChange}
                      value={values.password}
                      helperText={
                        errors.password && touched.password && errors.password
                      }
                      error={errors.password && touched.password}
                      onBlur={handleBlur}
                    />
                    <TextField
                      id="confirmPassword"
                      label="Confirmer le mot de passe*"
                      type="password"
                      name="confirmPassword"
                      style={{ width: 300 }}
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      onChange={handleChange}
                      value={values.confirmPassword}
                      helperText={
                        errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword
                      }
                      error={errors.confirmPassword && touched.confirmPassword}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div style={{ float: 'right' }}>
                    <GreenButton
                      id="signUp-button"
                      style={{ width: 150, margin: '24px 0 0' }}
                      type="submit"
                      disabled={
                        formHasErrors(errors) || values === initialValues
                      }
                    >
                      S'Inscrire
                    </GreenButton>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

SignIn.propTypes = {
  signIn: PropTypes.func,
};

export default memo(SignIn);
