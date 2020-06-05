/**
 *
 * CustomGrid
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function CustomGrid({ children, justify }) {
  const spacing = 3;
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify={justify} alignItems="center" spacing={spacing}>
          {/* {niveaux.map(niveau => (
            <Grid key={niveau.id} item>
              <NiveauPaper key={niveau.id} niveau={niveau} />
            </Grid>
          ))} */}
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

CustomGrid.defaultProps = {
  justify: 'center',
};

CustomGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  justify: PropTypes.string,
};

export default memo(CustomGrid);
