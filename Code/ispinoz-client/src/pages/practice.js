import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppbarProblems from "../components/appbarProblems";
import '../App.css'
import knapsack from "../images/knapsack.png";
import tsp from "../images/traveling-salesman.png";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  row: {
    display: "flex",
    marginTop: "20px",
    marginLeft: "10px",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="home">
      <AppbarProblems />
      <div className={classes.row}>
        <div className={classes.row}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Sırt Çantası Problemi"
          height="150"
          image={knapsack}
          title="Sırt Çantası Problemi"
        />
        <CardContent>
          <Typography  color="primary"  gutterBottom variant="h5" component="h2">
            Sırt Çantası Problemi
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to="/">
          ÖĞREN
        </Button>
        <Button size="small" color="primary" component={Link} to="/sırtÇantasıProlemiUygula">
          UYGULA
        </Button>
      </CardActions>
    </Card>
        </div >
        <div className={classes.row}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="150"
            image={tsp}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography  color="primary"  gutterBottom variant="h5" component="h2">
              Gezici Satıcı Problemi
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/">
           ÖĞREN
          </Button>
          <Button size="small" color="primary" component={Link} to="/geziciSatıcıProblemiUygula">
            UYGULA
          </Button>
        </CardActions>
      </Card>
        </div>

      </div>
    </div>
  );
}