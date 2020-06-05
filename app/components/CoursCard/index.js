/**
 *
 * CoursCard
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
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

const colorChip = matiere => {
  switch (matiere) {
    case 'Arabe':
      return 'green';
    case 'Francais':
      return 'red';
    case 'Anglais':
      return 'blue';
    case 'EducationArtistique':
      return 'blueviolet';
    case 'ActivitésScientifiques':
      return 'chocolate';
    case 'Mathématiques':
      return 'deepskyblue';
    default:
      return 'red';
  }
};

function CoursCard({ document }) {
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

  const withResource = document.resourceUrl !== '';
  console.log(withResource);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h5" component="h2">
              {document.title}
            </Typography>
            <Chip
              color="primary"
              style={{ backgroundColor: colorChip(document.matiere) }}
              label={document.matiere}
              size="small"
            />
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {document.content}
          </Typography>
          {withResource && (
            <Typography variant="body2" color="textSecondary" component="p">
              Page {pageNumber} sur {numPages}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {withResource && (
        <CardActions>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href={document.resourceUrl}
            color="primary"
            size="small"
          >
            Ouvrir
          </Button>
          <Button size="small" onClick={handleExpandClick} color="primary">
            Aperçu
          </Button>
        </CardActions>
      )}
      {withResource && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className={classes.media}>
              <Document
                file={`https://cors-anywhere.herokuapp.com/${
                  document.resourceUrl
                }`}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page size="C9" pageNumber={pageNumber} />
              </Document>
            </div>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
}

CoursCard.propTypes = {
  document: PropTypes.object.isRequired,
};

export default memo(CoursCard);
