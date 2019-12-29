import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ReferencesBook from "../images/ReferencesBook.JPG";
import ReferencesMatworks from "../images/ReferencesMatworks.png";

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "900px",
  },
  book: {
    marginTop: "50px",
    marginLeft: "10px"
  },
  link: {
    marginTop: "30px",
    marginLeft: "10px"
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography color={"primary"} variant="h5" component="h3">
        Referanslarımız
      </Typography>

      <br/><br/>


      <Grid container>
        <img src={ReferencesBook} width={100}/>
        <div className={classes.book}>
          <Typography color={"primary"} component="p">
            A.E. Eiben and J.E. Smith <br/>
            Introduction to Evolutionary Computing (2nd Edition)
          </Typography>
        </div>
      </Grid>


      <br/><br/>


      <Grid container>
        <img src={ReferencesMatworks} width={100}/>
        <div className={classes.link}>
          <Typography color={"primary"} component="p">
            Matworks <br/>
            Genetic Algorithm
          </Typography>
        </div>
      </Grid>


    </Paper>
  );
}