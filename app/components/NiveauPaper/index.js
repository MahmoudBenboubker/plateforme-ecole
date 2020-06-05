/**
 *
 * NiveauPaper
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CustomGrid from '../CustomGrid';
import history from '../../utils/history';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function NiveauPaper({ niveau }) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            niveau.image ||
            'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
          }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {niveau.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Vous trouverez les documents et les liens, de {` ${niveau.name} `},
            classés par classe et par matières. Veuillez appuyez sur la flèche
            pour étendre la liste.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Niveaux:</Typography>
          <CustomGrid>
            {niveau.subNiveaux.map(subNiveau => (
              <Grid key={subNiveau.id} item>
                <Button
                  onClick={() => history.push(`/cours/${subNiveau.id}`)}
                  variant="outlined"
                >
                  {subNiveau.name}
                </Button>
              </Grid>
            ))}
          </CustomGrid>
        </CardContent>
      </Collapse>
    </Card>
  );
}

NiveauPaper.propTypes = {
  niveau: PropTypes.object.isRequired,
};

export default memo(NiveauPaper);
