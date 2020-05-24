/**
 *
 * CoursFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Paper, Badge, Tab } from '@material-ui/core';
import useStyles from './styles';

function CoursFilter() {
  const classes = useStyles();

  return (
    <Paper
      square
      classes={{ elevation1: classes.paperShadow }}
      className={classes.paper}
    >
      {/* <div className={classes.myActions}>Niveau / Sous Niveau</div> */}
      <Tab
        classes={{ root: classes.rootTab, selected: classes.selectedTab }}
        label={
          <Badge classes={{ badge: classes.badgeTab }} badgeContent={1}>
            Classe 1
          </Badge>
        }
      />
      <Tab
        classes={{ root: classes.rootTab, selected: classes.selectedTab }}
        label={
          <Badge classes={{ badge: classes.badgeTab }} badgeContent={1}>
            Classe 2
          </Badge>
        }
      />
      <Tab
        classes={{ root: classes.rootTab, selected: classes.selectedTab }}
        label={
          <Badge classes={{ badge: classes.badgeTab }} badgeContent={1}>
            Classe 3
          </Badge>
        }
      />
      <div style={{ width: 132 }} className={classes.buttonsIcons} />
    </Paper>
  );
}

CoursFilter.propTypes = {};

export default memo(CoursFilter);
