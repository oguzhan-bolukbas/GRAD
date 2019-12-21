import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import binaryRepresentation from "../images/binaryRepresentation.png";
import permutationRepresentation from "../images/permutationRepresentation.png";
import integerRepresentation from "../images/integerRepresentation.png";


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
        Genetik Kodlama Nedir?
      </Typography>
      <Typography align={"justify"} component="p">
        <br/>Kodlama genetik algoritmanın önemli bir
        aşamasıdır.GA uygulamasına başlamadan önce, verilerin
        uygun şekilde kodlanması gerekir. Geliştirilen modelin hızlı ve güvenilir çalışması
        için bu kodlamanın doğru yapılması gerekir. <br/>
      </Typography>

      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>İkili (Binary) Kodlama : </b>
        En çok kullanılan kodlama yöntemidir. Basit,
        kolay ve hızlı işlemler için uygundur. Kromozomların tanımlanması genellikle ikili
        sayı sistemi ile (0,1) yapılır. <br/><br/>
      </Typography>

      <Grid container justify="center" alignItems="center">
        <img src={binaryRepresentation} width={350}/>
      </Grid>

      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Tamsayı (Integer) Kodlama : </b>
        Ayrık değerli genler için, çözüm alanını her zaman ikili "evet"
        veya "hayır" ile sınırlayamayız. Örneğin, dört mesafeyi (Kuzey, Güney, Doğu ve Batı)
        kodlamak istiyorsak, bunları {"{0,1,2,3}"} olarak kodlayabiliriz.
        Bu gibi durumlarda, tamsayı kodlama kullanılır. <br/><br/>
      </Typography>

      <Grid container justify="center" alignItems="center">
        <img src={integerRepresentation} width={350}/>
      </Grid>


      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Permütasyon Kodlama : </b>
        Sıralamaya veya düzenlemeye yönelik
        problemler için uygundur. Gezgin satıcı problemi (TSP) veya görev
        sıralama gibi problemlerin çözümü için
        kullanılır. <br/><br/>
      </Typography>

      <Grid container justify="center" alignItems="center">
        <img src={permutationRepresentation} width={350}/>
      </Grid>


    </Paper>
  );
}