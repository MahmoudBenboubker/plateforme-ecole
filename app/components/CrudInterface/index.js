/**
 *
 * CrudInterface
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import DescriptionIcon from '@material-ui/icons/Description';
import notFound from '../../images/not-found.svg';
import { GreenButton } from '../CustomizedElements/CustomizedElements';
import history from '../../utils/history';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
});

function CrudInterface({ classes, addCours, current, deleteCours }) {
  const classes1 = useStyles();
  return (
    <Paper style={{ margin: 18, height: '100%', width: '100%' }}>
      <div style={{ margin: 0 }}>
        <Typography variant="h6" style={{ margin: 8, marginBottom: 24 }}>
          Gestion des classes
        </Typography>
        {classes[0] === undefined && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              marginLeft: '40%',
            }}
          >
            <img
              src={notFound}
              style={{ width: '25%', height: '25%' }}
              alt="notfound"
            />
            <Typography style={{ justifyContent: 'center' }}>
              Pas de classes trouvées, veuillez en créer une.{' '}
            </Typography>
          </div>
        )}
        {!(classes[0] === undefined) && (
          <TableContainer component={Paper}>
            <Table className={classes1.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nom de la classe</TableCell>
                  <TableCell>Modifier</TableCell>
                  <TableCell>Supprimer</TableCell>
                  <TableCell>Documents</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classes.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <IconButton>
                        <EditIcon style={{ color: green[500] }} />
                      </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <IconButton onClick={() => deleteCours(row)}>
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <IconButton
                        onClick={() =>
                          history.push(`/classe/${row.id}/gestionCours`)
                        }
                      >
                        <DescriptionIcon color="primary" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <div
          style={{
            display: 'flex',
            marginTop: 8,
            marginBottom: '-8',
            justifyContent: 'flex-end',
          }}
        >
          {current && (
            <GreenButton onClick={() => addCours(true)}>
              Nouvelle classe
            </GreenButton>
          )}
        </div>
      </div>
    </Paper>
  );
}

CrudInterface.propTypes = {
  classes: PropTypes.array.isRequired,
  addCours: PropTypes.func.isRequired,
  deleteCours: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
};

export default memo(CrudInterface);
