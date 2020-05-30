/**
 *
 * CoursFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
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
import CustomGrid from '../CustomGrid';
import useStyles from './styles';

function CoursFilter() {
  const classes = useStyles();

  return (
    <>
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
                // value={sortValue}
                // onChange={handleSortChange}
                input={<OutlinedInput labelWidth={65} name="Trier par" />}
                style={{ width: 200, marginRight: 16 }}
              >
                <MenuItem value="">
                  <em>Aucune</em>
                </MenuItem>
                <MenuItem value="DESC">Les plus récentes</MenuItem>
                <MenuItem value="ASC">Les plus anciennes</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl
              style={{ margin: 0 }}
              margin="dense"
              variant="outlined"
            >
              <InputLabel>Date</InputLabel>
              <Select
                // value={sortValue}
                // onChange={handleSortChange}
                input={<OutlinedInput labelWidth={65} name="Trier par" />}
                style={{ width: 200, marginRight: 16 }}
              >
                <MenuItem value="">
                  <em>Aucune</em>
                </MenuItem>
                <MenuItem value="DESC">Les plus récentes</MenuItem>
                <MenuItem value="ASC">Les plus anciennes</MenuItem>
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
                // value={sortValue}
                // onChange={handleSortChange}
                input={<OutlinedInput labelWidth={65} name="Trier par" />}
                style={{ width: 200, marginRight: 16 }}
              >
                <MenuItem value="">
                  <em>Aucune</em>
                </MenuItem>
                <MenuItem value="DESC">Les plus récentes</MenuItem>
                <MenuItem value="ASC">Les plus anciennes</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </CustomGrid>
      </Paper>
    </>
  );
}

CoursFilter.propTypes = {};

export default memo(CoursFilter);
