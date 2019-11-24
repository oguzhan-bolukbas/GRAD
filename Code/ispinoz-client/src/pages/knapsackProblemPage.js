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
import elma from "../images/elma.png";
import armut from "../images/armut.png";
import {Link} from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import  { useState } from 'react';

const useStyles = makeStyles({

  card: {
    maxWidth: 130,
  },
  row: {
    display: "flex",
    marginTop: "5px",
    marginLeft: "10px",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();
  function add_knapsack() {
    alert(countElma+1);
  }
  function sub_knapsack() {
    alert(countElma-1);
  }
  const [countElma, setCountElma] = useState(0);
  const [countArmut, setCountArmut] = useState(0);
  return (
      <div className="home">
        <AppbarProblems />
        <div className={classes.row}>
          <div className={classes.row}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Elma"
                    height="120"
                    image={elma}
                    title="Elma"
                />
                <CardContent>
                  <Typography  color="primary"  gutterBottom variant="h5" component="h4">
                   Elma
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <button onClick={() => setCountElma(countElma +1)}>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} >
                  <ExposurePlus1Icon />
                </Fab>
              </button>
                <button onClick={() => setCountElma(countElma -1)}>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} >
                  <ExposureNeg1Icon />
                </Fab>
                </button>
              </CardActions>

                <Typography  color="primary"  gutterBottom variant="h5" component="h4" align={"center"}>
                  {countElma}
                </Typography>
            </Card>
          </div >
          <div className={classes.row}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Armut"
                    height="120"
                    image={armut}
                    title="Armut"
                />
                <CardContent>
                  <Typography  color="primary"  gutterBottom variant="h5" component="h4">
                    Armut
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <button onClick={() => setCountArmut(countArmut +1)}>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} >
                  <ExposurePlus1Icon />
                </Fab>
                </button>
                  <button onClick={() => setCountArmut(countArmut -1)}>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} >
                  <ExposureNeg1Icon />
                </Fab>
                  </button>
              </CardActions>
              <Typography  color="primary"  gutterBottom variant="h5" component="h2" align={"center"}>
                {countArmut}
              </Typography>
            </Card>
          </div>

        </div>
      </div>
  );
}