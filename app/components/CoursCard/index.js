/**
 *
 * CoursCard
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Document, Page } from 'react-pdf';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 350,
  },
  media: {},
});

function CoursCard() {
  const classes = useStyles();

  const [numPages, setNumPages] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [pageNumber, setPageNumber] = useState(1);

  // eslint-disable-next-line no-shadow
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h5" component="h2">
              Titre
            </Typography>
            <Chip color="secondary" label="Mathématique" size="small" />
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            Description du document
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Page {pageNumber} sur {numPages}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Télécharger
        </Button>
        <Button size="small" onClick={handleExpandClick} color="primary">
          Aperçu
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div className={classes.media}>
            <Document
              file="https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/plateforme-ecole.appspot.com/o/311185202732.pdf?alt=media&token=60e40b2d-0432-4573-856c-e593275077de"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page size="C9" pageNumber={pageNumber} />
            </Document>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}

CoursCard.propTypes = {};

export default memo(CoursCard);
