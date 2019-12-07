import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import gene from "../images/gene.png";
import choromosome from "../images/choromosome.png";
import populasyon from "../images/populasyon.png";


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
        Gen,Kromozom ve Popülasyon Nedir?
      </Typography>

      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Gen</b>, yapay sistemlerde kendi başına anlamlı bilgi taşıyan en küçük birim olarak tanımlanır.
      </Typography>

      <Typography align={"justify"} component="p">
        <br/>
        <b>Kromozom (Birey)</b>, birden fazla genin bir araya gelerek oluşturduğu diziye denir. Kromozomlar, alternatif aday çözümleri gösterirler.
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