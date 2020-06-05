/**
 *
 * CreateCours
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Formik } from 'formik';
import {
  GreenButtonOutlined,
  GreenButton,
} from '../CustomizedElements/CustomizedElements';
import useStyles from '../Login/styles';
import { formHasErrors } from '../../constants/constants';

function CreateCours({ close, createDoc }) {
  const initialValues = {
    title: '',
    content: '',
    matiere: '',
  };

  const CreateDocumentSchema = Yup.object().shape({
    title: Yup.string().required('Champ obligatoire'),
    content: Yup.string().required('Champ obligatoire'),
    matiere: Yup.string().required('Champ obligatoire'),
  });

  const classes = useStyles();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateDocumentSchema}
      onSubmit={values => {
        const payload = {
          title: values.title,
          content: values.content,
          matiere: values.matiere,
        };
        createDoc(payload);
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
                Veuillez remplir le formulaire.
              </div>
              <div className={classes.rowContainer}>
                <TextField
                  className={classes.field}
                  id="title"
                  label="Titre"
                  placeholder="Titre"
                  margin="dense"
                  onChange={handleChange}
                  helperText={errors.title && touched.title && errors.title}
                  error={errors.title && touched.title}
                  onBlur={handleBlur}
                  value={values.title}
                  type="text"
                  variant="outlined"
                  fullWidth
                  name="title"
                />
              </div>
              <div className={classes.rowContainer}>
                <TextField
                  className={classes.field}
                  id="content"
                  label="Description"
                  placeholder="Description"
                  margin="dense"
                  multiline
                  rows={2}
                  onChange={handleChange}
                  helperText={
                    errors.content && touched.content && errors.content
                  }
                  error={errors.content && touched.content}
                  onBlur={handleBlur}
                  value={values.content}
                  type="text"
                  variant="outlined"
                  fullWidth
                  name="content"
                />
              </div>
              <div
                style={{ marginTop: 20, width: '100%' }}
                className={classes.rowContainer}
              >
                <FormControl margin="dense" variant="outlined">
                  <InputLabel>Matière</InputLabel>
                  <Select
                    value={values.matiere}
                    input={<OutlinedInput labelWidth={60} name="Matière" />}
                    onBlur={handleBlur}
                    margin="dense"
                    variant="outlined"
                    name="matiere"
                    id="matiere"
                    fullWidth
                    onChange={e => {
                      handleChange(e);
                    }}
                    error={errors.matiere && touched.matiere}
                    style={{ width: 316, marginRight: 16 }}
                  >
                    <MenuItem value="">
                      <em>Aucune</em>
                    </MenuItem>
                    <MenuItem value="Arabe">Arabe + EI</MenuItem>
                    <MenuItem value="Francais"> Francais </MenuItem>
                    <MenuItem value="Anglais"> Anglais </MenuItem>
                    <MenuItem value="Mathématiques"> Mathématiques </MenuItem>
                    <MenuItem value="EducationArtistique">
                      Education Artistique
                    </MenuItem>
                    <MenuItem value="ActivitésScientifiques">
                      Activités Scientifiques
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div
                style={{ justifyContent: 'flex-end' }}
                className={classes.rowButtonsContainer}
              >
                <div className={classes.buttonContainer}>
                  <GreenButtonOutlined onClick={close} id="changePswdBtn">
                    Annuler
                  </GreenButtonOutlined>
                  <GreenButton
                    id="validerBtn"
                    style={{ marginRight: 18 }}
                    type="submit"
                    disabled={formHasErrors(errors) || values === initialValues}
                  >
                    Valider
                  </GreenButton>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

CreateCours.propTypes = {
  close: PropTypes.func.isRequired,
  createDoc: PropTypes.func.isRequired,
};

export default memo(CreateCours);
