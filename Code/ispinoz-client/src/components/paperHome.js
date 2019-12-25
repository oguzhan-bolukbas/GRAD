import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import European from "../images/European.png";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    width: "600px",
    height: "360px"
  },
  mar: {
    marginTop: "40px"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={European} width={75}/>
          </ButtonBase>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <ButtonBase className={classes.image}>
            <Typography variant="h4" color="primary">İSPİNOZ</Typography>
          </ButtonBase>
        </Grid>
      </Grid>
      <br/>
      <Typography component="p" align={"justify"}>
        İspinoz size "Genetik Algoritma"yı öğrenme, problem ve quiz çözerek pratik yapabilme imkanı sağlayan
        etkileşimli bir web sitesidir.
        <Typography variant="a" component={Link} to={`/dersler/genetik-algoritma-nedir`}
                    color="primary"> Dersler </Typography>
        sekmesinden genetik algoritmayı öğrenmeye,
        <Typography variant="a" component={Link} to={`/quiz`} color="primary"> Quiz </Typography>
        sekmesinden öğrendiğiniz bilgilerinizi ölçmeye,
        <Typography variant="a" component={Link} to={`/problemler`} color="primary"> Problemler </Typography>
        sekmesinden çeşitli problemleri inceleyip uygulamaya başlayabilirsiniz.
      </Typography>
      <br/>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button variant="contained" color="primary" style={{float: 'left'}} className="float-left" component={Link}
                  to="/dersler/genetik-algoritma-nedir">ÖĞRENMEYE BAŞLA</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" style={{float: 'right'}} className="float-right" component={Link}
                  to="/problemler">PRATİK YAP</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};