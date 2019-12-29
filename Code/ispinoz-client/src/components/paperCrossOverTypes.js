import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import before1pointCrossover from "../images/before1pointCrossover.png";
import after1pointCrossover from "../images/after1pointCrossover.png";
import before2pointCrossover from "../images/before2pointcrossover.png";
import after2pointCrossover from "../images/after2pointcrossover.png";
import beforeUniformCrossover from "../images/beforeUniformCrossover.png";
import afterUniformCrossover from "../images/afterUniformCrossover.png";

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
        <b color={"primary"}>Tek Noktalı Çaprazlama (1-point Crossover) :</b>
        Ebeveynlerde bir çaprazlama noktası seçilir. Noktanın gerisinde kalan kısımlar birbirleriyle yer değiştirilerek
        yeni bireyler oluşturulur.
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
        <b color={"primary"}>iki Noktalı Çaprazlama (2-point Crossover) : </b>
        Çok Noktalı Çaprazlama'nın (N - Point Crossover) spesifik bir çeşididir. Ebeveynlerde 2 ayrı nokta seçilir ve
        noktalar arasındaki genler yer değiştirilerek yeni bireyler
        oluşturulur.
      </Typography>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Çaprazlamadan Önce <br/><br/>
        </Typography>
        <img src={before2pointCrossover} width={350}/>
      </Grid>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Çaprazlamadan Sonra <br/><br/>
        </Typography>
        <img src={after2pointCrossover} width={350}/>
      </Grid>


      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Düzenli Çaprazlama (Uniform Crossover) : </b>
        Bu çaprazlama çeşidinde ebeveynler çaprazlama noktalarıyla parçalara bölünmezler,
        her gen için çaprazlama yapılıp yapılmayacağına bakılır. Çaprazlama yapılacak
        genler, madeni para havaya fırlatma olasılığındaki gibi düzenli şekilde seçildikten sonra çaprazlanarak
        yeni bireyler oluşturulur.
      </Typography>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Çaprazlamadan Önce <br/><br/>
        </Typography>
        <img src={beforeUniformCrossover} width={350}/>
      </Grid>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Çaprazlamadan Sonra <br/><br/>
        </Typography>
        <img src={afterUniformCrossover} width={350}/>
      </Grid>




    </Paper>
  );
}