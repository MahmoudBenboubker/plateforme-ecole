/**
 *
 * AdminNiveaux
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
  },
});

function AdminNiveaux({ niveaux, fetchClasses }) {
  const classes = useStyles();
  return (
    <Paper style={{ margin: 24, height: '100%' }}>
      <div style={{ margin: 8 }}>
        <Typography variant="h6" style={{ margin: 8 }}>
          Selectionner un niveau
        </Typography>
        <div style={{ marginTop: '24px' }}>
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {niveaux.map(niveau => (
              <TreeItem id={niveau.id} nodeId={niveau.id} label={niveau.name}>
                {niveau.subNiveaux.map(subNiveau => (
                  <TreeItem
                    nodeId={subNiveau.id}
                    id={subNiveau.id}
                    onLabelClick={() => fetchClasses(subNiveau.id)}
                    label={subNiveau.name}
                  />
                ))}
              </TreeItem>
            ))}
          </TreeView>
        </div>
      </div>
    </Paper>
  );
}

AdminNiveaux.propTypes = {
  niveaux: PropTypes.array.isRequired,
  fetchClasses: PropTypes.func.isRequired,
};

export default memo(AdminNiveaux);
