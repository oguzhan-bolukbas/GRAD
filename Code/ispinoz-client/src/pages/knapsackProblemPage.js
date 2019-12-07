import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    maxWidth: 80,
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
    marginLeft: "550px"
  },
  card3:{
      maxWidth: 60,
      marginTop: "250px",
      marginBottom: "40px",
      justifyContent: "center",
      alignItems: "center"
  }
});
export default function ImgMediaCard() {
  const classes = useStyles();
  function negative(negativevalue) {
      if(negativevalue<0){
          alert("Ürün adeti negatif olamaz!");
      }
  }
  function capacity(weightvalue) {
      if(weightvalue > 20){
          alert("Kapasite aşıldı!");
      }
  }
  const [countElma, setCountElma] = useState(0);
  const [countArmut, setCountArmut] = useState(0);
  const [countPortakal, setCountPortakal] = useState(0);
  const [countKivi, setCountKivi] = useState(0);
  const [countCilek, setCountCilek] = useState(0);
  const [countweight, setCountweight] = useState(0);
  const [countvalue, setCountvalue] = useState(0);
  return (
      <div className="home">
        <AppbarProblems />
        <div className={classes.row}>
        <div className={classes.row}>
            <div className={classes.row}>
                <card3 className={classes.card3}>
                    <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                      Adet:
                    </Typography>
                </card3>
            </div >
            <div className={classes.row}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Elma"
                    height="80"
                    image={elma}
                    title="Elma"
                />
                <CardContent>
                  <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                   Elma
                  </Typography>
                </CardContent>
                  <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                      Değer: 1 {"\n"}
                  </Typography>
                  <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                      Ağırlık: 5
                  </Typography>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountElma(countElma +1); setCountweight(countweight + 5); setCountvalue(countvalue + 1); capacity(countweight+5)}} >
                  <ExposurePlus1Icon />
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountElma(countElma -1); setCountweight(countweight - 5); setCountvalue(countvalue - 1); negative(countElma-1)} }>
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
                    height="80"
                    image={armut}
                    title="Armut"
                />
                <CardContent>
                  <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                    Armut{"\n"}
                  </Typography>
                </CardContent>
                  <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                      Değer: 2 {"\n"}
                  </Typography>
                  <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                      Ağırlık: 7
                  </Typography>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountArmut(countArmut +1); setCountweight(countweight + 7); setCountvalue(countvalue + 2); capacity(countweight+7)}} >
                  <ExposurePlus1Icon />
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountArmut(countArmut -1); setCountweight(countweight - 7); setCountvalue(countvalue - 2); negative(countArmut-1)}}>
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
                            height="80"
                            image={portakal}
                            title="Portakal"
                        />
                        <CardContent>
                            <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                                Limon
                            </Typography>
                        </CardContent>
                        <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                            Değer: 3{"\n"}
                        </Typography>
                        <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                            Ağırlık: 6
                        </Typography>
                    </CardActionArea>
                    <CardActions>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountPortakal(countPortakal +1);  setCountweight(countweight + 6); setCountvalue(countvalue + 3); capacity(countweight+6)}} >
                            <ExposurePlus1Icon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountPortakal(countPortakal -1); setCountweight(countweight - 6); setCountvalue(countvalue - 3); negative(countPortakal-1)}} >
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
                            height="80"
                            image={kivi}
                            title="Kivi"
                        />
                        <CardContent>
                            <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                                Kivi
                            </Typography>
                        </CardContent>
                        <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                            Değer: 4 {"\n"}
                        </Typography>
                        <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                            Ağırlık: 4
                        </Typography>
                    </CardActionArea>
                    <CardActions>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountKivi(countKivi +1);  setCountweight(countweight + 4); setCountvalue(countvalue + 4); capacity(countweight+4)}} >
                            <ExposurePlus1Icon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountKivi(countKivi -1); setCountweight(countweight - 4); setCountvalue(countvalue - 4); negative(countKivi-1)}} >
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
                            height="80"
                            image={cilek}
                            title="Cilek"
                        />
                        <CardContent>
                            <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                                Çilek
                            </Typography>
                        </CardContent>
                        <Typography  color="primary"  gutterBottom variant="h7" component="h7" >
                            Değer: 5 {"\n"}
                        </Typography>
                        <Typography  color="primary"  gutterBottom variant="h7" component="h7">
                            Ağırlık: 3
                        </Typography>
                    </CardActionArea>
                    <CardActions>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountCilek(countCilek +1);  setCountweight(countweight + 3); setCountvalue(countvalue + 5); capacity(countweight+5)}} >
                            <ExposurePlus1Icon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {setCountCilek(countCilek -1); setCountweight(countweight - 3); setCountvalue(countvalue - 5); negative(countCilek-1)}} >
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
                height="120"
                image={backpack}
                title="Canta"
            />
            <CardContent>
              <Typography  color="primary"  gutterBottom variant="h5" component="h4" align={"center"}>
                Çanta{"\n"}
            </Typography>
                <Typography  color="primary"  gutterBottom variant="h7" component="h7" align={"center"}>
                    Kapasite: 20
                </Typography>
            </CardContent>
            <Typography  color="primary"  gutterBottom variant="h6" component="h6" align={"center"}>
              Ağırlık: {countweight} {"\n"}
          </Typography>
              <Typography  color="primary"  gutterBottom variant="h6" component="h6" align={"center"}>
                  Değer: {countvalue}
              </Typography>
          </CardActionArea>
        </card2>
      </div>
  );
}