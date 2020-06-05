/**
 *
 * CoursFilter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';

import CustomGrid from '../CustomGrid';
import useStyles from './styles';
import { GreenButton } from '../CustomizedElements/CustomizedElements';
import { formHasErrors } from '../../constants/constants';

function CoursFilter({ filter, classesSub }) {
  const classes = useStyles();

  const initialValues = {
    classe: '',
    matiere: '',
  };

  const DocSchema = Yup.object().shape({
    classe: Yup.string().required('Champ obligatoire'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          filter(values);
        }}
        validationSchema={DocSchema}
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
            <Paper
              square
              classes={{ elevation1: classes.paperShadow }}
              className={classes.paper}
              style={{ margin: 8, marginBottom: 24 }}
            >
              <div className={classes.myActions}>Filtres</div>
              <CustomGrid justify="space-evenly">
                <Grid item>
                  <FormControl
                    style={{ margin: 0 }}
                    margin="dense"
                    variant="outlined"
                  >
                    <InputLabel>Classes</InputLabel>
                    <Select
                      value={values.classe}
                      input={<OutlinedInput labelWidth={65} name="classe" />}
                      onBlur={handleBlur}
                      margin="dense"
                      variant="outlined"
                      name="classe"
                      id="classe"
                      fullWidth
                      onChange={e => {
                        handleChange(e);
                      }}
                      error={errors.classe && touched.classe}
                      style={{ width: 200, marginRight: 16 }}
                    >
                      <MenuItem value="">
                        <em>Aucune</em>
                      </MenuItem>
                      {classesSub.map(classe => (
                        <MenuItem value={classe.id}>{classe.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl
                    style={{ margin: 0 }}
                    margin="dense"
                    variant="outlined"
                  >
                    <InputLabel>Matière</InputLabel>
                    <Select
                      value={values.matiere}
                      input={<OutlinedInput labelWidth={65} name="Matière" />}
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
                      style={{ width: 200, marginRight: 16 }}
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
                </Grid>

                <Grid item>
                  <GreenButton
                    id="validerBtn"
                    style={{ marginRight: 17, width: '200px' }}
                    type="submit"
                    disabled={
                      formHasErrors(errors) ||
                      values.classe === initialValues.classe
                    }
                  >
                    Valider
                  </GreenButton>
                </Grid>
              </CustomGrid>
            </Paper>
          </form>
        )}
      </Formik>
    </>
  );
}

CoursFilter.propTypes = {
  filter: PropTypes.func.isRequired,
  classesSub: PropTypes.array.isRequired,
};

export default memo(CoursFilter);
