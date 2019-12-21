import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import x1 from "../images/x1.png";
import x2 from "../images/x2.png";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "900px",
  },
  card: {
    maxWidth: 400,
  },
  row: {
    display: "flex",
    marginTop: "5px",
    marginLeft: "10px",
    justifyContent: "center",
    alignItems: "center"
  },
  card2: {
    maxWidth: 130,
    display: "flex",
    marginTop: "5px",
    marginBottom: "20px",
    marginLeft: "550px"
  },
  card3: {
    maxWidth: 60,
    marginTop: "250px",
    justifyContent: "center",
    marginBottom: "40px",
    marginRight: "10px",
    alignItems: "center"
  },
  card4: {
    maxWidth: 200,
    marginLeft: "100px",
    marginTop: "-50px"
  },
  marginLeft: {
    marginLeft: "60px"
  },
  margin5px: {
    marginLeft: "10px"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography color={"primary"} variant="h5" component="h3">
        Uygunluk (Fitness) Fonksiyonu Nedir?
      </Typography>
      <Typography align={"justify"} component="p">
        <br/>Uygunluk fonksiyonu, farklı çözümlerin (kromozomların) karşılaştırılması ve iyi olanların seçimi için
        gereklidir.
        <br/>
        f(x1) > f(x2) ise x1, x2’den daha iyidir.
        <br/>
        Bir popülasyon oluşturulduktan sonra, popülasyondaki her bireyin uygunluk (fitness) değeri hesaplanır.
        <br/>
        <br/>
        Örneğin, Gezgin Satıcı Problemi
        <br/>
        Gezi için bir çok yol seçeneği vardır:
        <br/>
      </Typography>


      <div className={classes.row}>
        <div className={classes.row}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="x1"
                width="500"
                image={x1}
                title="x1"/>
              <CardContent>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  x1
                </Typography>
              </CardContent>
            </CardActionArea>
            <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
            </Typography>
          </Card>
        </div>
        <div className={classes.row}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="x2"
                width="200"
                image={x2}
                title="x2"/>
              <CardContent>
                <Typography color="primary" gutterBottom variant="h7" component="h7" justifyContents={"center"}>
                  x2{"\n"}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
            </Typography>
          </Card>
        </div>
      </div>

      <Typography align={"justify"} component="p">
        <br/>
        – Uygunluk fonksiyonu: f(x) = min(uzunluk)
        <br/>
        – f(x1) {" < "} olduğu için x1, x2’den daha iyi bir çözümdür. Bu nedenle x1 seçilir.
      </Typography>


    </Paper>
  );
}