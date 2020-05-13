/**
 *
 * NiveauPaper
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { mainColor } from '../../constants/constants';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: '12px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: mainColor,
  },
  details: {
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: mainColor,
    color: '#fff',
  },
}));

function NiveauPaper({ niveau }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{niveau.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Grid container spacing={1} justify="center" alignItems="center">
            {niveau.subNiveaux.map(subNiveau => (
              <Grid item md={4}>
                <Button
                  key={subNiveau.id}
                  fullWidth
                  variant="contained"
                  className={classes.button}
                >
                  {subNiveau.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

NiveauPaper.propTypes = {
  niveau: PropTypes.object.isRequired,
};

export default memo(NiveauPaper);
