import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ebeveyn1 from "../images/ebeveyn1.png";
import ebeveyn2 from "../images/ebeveyn2.png";

import yeniBireyler from "../images/yeniBireyler.png";
import caprazlamaNoktası from "../images/caprazlamaNoktası.png";


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
        Çaprazlama (Crossover) Nedir?
      </Typography>
      <Typography align={"justify"} component="p">
        <br/>
        Çaprazlama, üreme ve biyolojik çaprazlamaya benzemektedir. Çaprazlama için birden fazla ebeveyn seçilir
        ve ebeveynlerin genetik materyali kullanılarak bir veya daha fazla yeni birey üretilir. Çaprazlama,
        Genetik Algoritma'da genellikle yüksek olasılıkla uygulanır. <br/><br/><br/>
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          1. Ebeveyn <br/><br/>
        </Typography>

        <img src={ebeveyn1} width={350}/>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          2. Ebeveyn <br/><br/>
        </Typography>
        <img src={ebeveyn2} width={350}/>
      </Grid>

      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Çaprazlama Noktası <br/><br/>
        </Typography>
        <img src={caprazlamaNoktası} width={350}/>
      </Grid>

      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
         Yeni Bireyler <br/><br/>
        </Typography>
        <img src={yeniBireyler} width={350}/>
      </Grid>

    </Paper>
  );
}