/**
 *
 * CrudCours
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  makeStyles,
  Typography,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  TableContainer,
  TableHead,
  Table,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
});

function CrudCours({ documents }) {
  const classes1 = useStyles();
  return (
    <Paper style={{ margin: 18, height: '100%', width: '100%' }}>
      <div style={{ margin: 0 }}>
        <Typography variant="h6" style={{ margin: 8, marginBottom: 24 }}>
          Gestion des documents
        </Typography>
      </div>
      {documents[0] === undefined && (
        <Typography style={{ margin: 8 }}>
          Pas de documents pour cette classe. Veuillez en ajouter.
        </Typography>
      )}
      {!(documents[0] === undefined) && (
        <TableContainer component={Paper}>
          <Table className={classes1.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Titre</TableCell>
                <TableCell>Matière</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Lien</TableCell>
                <TableCell>Créé le</TableCell>
                <TableCell>Supprimer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documents.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.matiere}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.content}
                  </TableCell>
                  {!(row.resourceUrl === '') && (
                    <TableCell component="th" scope="row">
                      Telecharger
                    </TableCell>
                  )}
                  {row.resourceUrl === '' && (
                    <TableCell component="th" scope="row">
                      Ajouter
                    </TableCell>
                  )}

                  <TableCell component="th" scope="row">
                    {row.createdAt}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <IconButton>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
}

CrudCours.propTypes = {
  documents: PropTypes.array.isRequired,
};

export default memo(CrudCours);
