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

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { mainColor } from '../../constants/constants';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginBottom: '12px',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//     color: mainColor,
//   },
//   details: {
//     justifyContent: 'space-evenly',
//   },
//   button: {
//     backgroundColor: mainColor,
//     color: '#fff',
//   },
// }));

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function NiveauPaper({ niveau }) {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <ExpansionPanel>
    //     <ExpansionPanelSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //     >
    //       <Typography className={classes.heading}>{niveau.name}</Typography>
    //     </ExpansionPanelSummary>
    //     <ExpansionPanelDetails className={classes.details}>
    //       <Grid container spacing={1} justify="center" alignItems="center">
    //         {niveau.subNiveaux.map(subNiveau => (
    //           <Grid item md={4}>
    //             <Button
    //               key={subNiveau.id}
    //               fullWidth
    //               variant="contained"
    //               className={classes.button}
    //             >
    //               {subNiveau.name}
    //             </Button>
    //           </Grid>
    //         ))}
    //       </Grid>
    //     </ExpansionPanelDetails>
    //   </ExpansionPanel>
    // </div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

NiveauPaper.propTypes = {
  niveau: PropTypes.object.isRequired,
};

export default memo(NiveauPaper);
