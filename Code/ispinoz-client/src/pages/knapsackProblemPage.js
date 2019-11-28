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

import backpack from "../images/backpack.png";
import elma from "../images/elma.png";
import armut from "../images/armut.png";
import portakal from "../images/portakal.png";
import kivi from "../images/kivi.png";
import cilek from "../images/cilek.png";
import Fab from '@material-ui/core/Fab';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import  { useState } from 'react';

const useStyles = makeStyles({

  card: {
    maxWidth: 60,
  },
  row: {
    display: "flex",
    marginTop: "5px",
    marginLeft: "10px",
    justifyContent: "center",
    alignItems: "center"
  },
  card2: {
    maxWidth: 250,
    display: "flex",
    marginTop: "5px",
    marginLeft: "480px",
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
    const [countPortakal, setCountPortakal] = useState(0);
    const [countKivi, setCountKivi] = useState(0);
    const [countCilek, setCountCilek] = useState(0);
  const [countweight, setCountweight] = useState(0);

  return (
      <div className="home">
        <AppbarProblems />
        <div className={classes.row}>
        <div className={classes.row}>
          <div className={classes.row}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Elma"
                    height="60"
                    image={elma}
                    title="Elma"
                />
                <CardContent>
                  <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                   Elma
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountElma(countElma +1); setCountweight(countweight + 5)}} >
                  <ExposurePlus1Icon />
                </Fab>


                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountElma(countElma -1); setCountweight(countweight - 5)} }>
                  <ExposureNeg1Icon />
                </Fab>

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
                    height="60"
                    image={armut}
                    title="Armut"
                />
                <CardContent>
                  <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                    Armut
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>

                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountArmut(countArmut +1); setCountweight(countweight + 7)}} >
                  <ExposurePlus1Icon />
                </Fab>


                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountArmut(countArmut -1); setCountweight(countweight - 7)}}>
                  <ExposureNeg1Icon />
                </Fab>

              </CardActions>
              <Typography  color="primary"  gutterBottom variant="h5" component="h2" align={"center"}>
                {countArmut}
              </Typography>
            </Card>
          </div>
            <div className={classes.row}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Portakal"
                            height="60"
                            image={portakal}
                            title="Portakal"
                        />
                        <CardContent>
                            <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                                Limon
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountPortakal(countPortakal +1);  setCountweight(countweight + 6)}} >
                            <ExposurePlus1Icon />
                        </Fab>


                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountPortakal(countPortakal -1); setCountweight(countweight - 6)}} >
                            <ExposureNeg1Icon />
                        </Fab>

                    </CardActions>

                    <Typography  color="primary"  gutterBottom variant="h5" component="h4" align={"center"}>
                        {countPortakal}
                    </Typography>
                </Card>
            </div >

            <div className={classes.row}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Kivi"
                            height="60"
                            image={kivi}
                            title="Kivi"
                        />
                        <CardContent>
                            <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                                Kivi
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountKivi(countKivi +1);  setCountweight(countweight + 4)}} >
                            <ExposurePlus1Icon />
                        </Fab>


                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountKivi(countKivi -1); setCountweight(countweight - 4)}} >
                            <ExposureNeg1Icon />
                        </Fab>

                    </CardActions>

                    <Typography  color="primary"  gutterBottom variant="h5" component="h4" align={"center"}>
                        {countKivi}
                    </Typography>
                </Card>
            </div >
            <div className={classes.row}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Cilek"
                            height="60"
                            image={cilek}
                            title="Cilek"
                        />
                        <CardContent>
                            <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                                Çilek
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountCilek(countCilek +1);  setCountweight(countweight + 3)}} >
                            <ExposurePlus1Icon />
                        </Fab>


                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountCilek(countCilek -1); setCountweight(countweight - 3)}} >
                            <ExposureNeg1Icon />
                        </Fab>

                    </CardActions>

                    <Typography  color="primary"  gutterBottom variant="h5" component="h4" align={"center"}>
                        {countCilek}
                    </Typography>
                </Card>
            </div >
        </div>

      </div>
        <card2 className={classes.card2}>
          <CardActionArea>
            <CardMedia
                component="img"
                alt="Canta"
                height="250"
                image={backpack}
                title="Canta"
            />
            <CardContent>
              <Typography  color="primary"  gutterBottom variant="h5" component="h4">
                Çanta
              </Typography>
            </CardContent>
            <Typography  color="primary"  gutterBottom variant="h5" component="h2" align={"center"}>
              {countweight}
            </Typography>

          </CardActionArea>

        </card2>
      </div>
  );
}