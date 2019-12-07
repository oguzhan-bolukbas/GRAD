import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import gene from "../images/gene.png";

import choromosome from "../images/choromosome.png";
import populasyon from "../images/populasyon.png";


import before1pointCrossover from "../images/before1pointCrossover.png";
import after1pointCrossover from "../images/after1pointCrossover.png";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "900px",
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography color={"primary"} variant="h5" component="h3">
        Çaprazlama Çeşitleri
      </Typography>

      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Tek Noktalı Çaprazlama (1-point Crossover)</b>, yapay sistemlerde kendi başına anlamlı bilgi taşıyan en küçük birim olarak tanımlanır.
      </Typography>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Çaprazlamadan Önce <br/><br/>
        </Typography>
        <img src={before1pointCrossover} width={350}/>
      </Grid>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Çaprazlamadan Sonra <br/><br/>
        </Typography>
        <img src={after1pointCrossover} width={350}/>
      </Grid>


      <Typography align={"justify"} component="p">
        <br/>
        <b>Çok Noktalı Çaprazlama (n-point Crossover)</b>, birden fazla genin bir araya gelerek oluşturduğu diziye denir. Kromozomlar, alternatif aday çözümleri gösterirler.
      </Typography>

      <Typography align={"justify"} component="p">
        <br/>
        <b>Popülasyon</b>, kromozomlardan oluşan topluluğa denir. Geçerli alternatif çözüm kümesidir.<br/>
      </Typography>


      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Gen <br/><br/>
        </Typography>

        <img src={gene} width={350}/>
      </Grid>
      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Kromozom <br/><br/>
        </Typography>
        <img src={choromosome} width={350}/>
      </Grid>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Populasyon <br/><br/>
        </Typography>
        <img src={populasyon} width={350}/>
      </Grid>

    </Paper>
  );
}