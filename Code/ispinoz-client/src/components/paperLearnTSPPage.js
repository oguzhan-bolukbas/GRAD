import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import ankara from "../images/ankara.png";
import antalya from "../images/antalya.png";
import malatya from "../images/malatya.png";
import bursa from "../images/bursa.png";
import turkiyeMap1234 from "../images/turkiyeMap1234.png";
import turkiyeMap1243 from "../images/turkiyeMap1243.png";


import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "1200px",
  },
  infoDiv: {
    align: "center",
    alignItems: "center",
    centered: true,
    alignmentBaseline: "center",
    content: "center"
  },
  card: {
    maxWidth: 80,
  },
  cardMap: {
    maxWidth: 600,
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
    marginBottom: "40px",
    marginRight: "10px",
  },
  card4: {
    maxWidth: 200,
    marginLeft: "50px",
    marginTop: "-50px"
  },
  marginLeft: {
    marginLeft: "60px"
  },
  margin5px: {
    marginLeft: "10px"
  },
  orta: {
    justifyContent: "center",
    alignItems: "center"
  }
}));


export default function PaperSheet() {
  const classes = useStyles();

  const [placeOfAnkara, setPlaceOfAnkara] = useState(1);
  const [placeOfAntalya, setPlaceOfAntalya] = useState(2);
  const [placeOfBursa, setPlaceOfBursa] = useState(3);
  const [placeOfMalatya, setPlaceOfMalatya] = useState(4);

  function increasePlaseOfAnkara() {
    if (placeOfAnkara + 1 != 5) {
      setPlaceOfAnkara(placeOfAnkara + 1);
    }
  }

  function decreasePlaseOfAnkara() {
    if (placeOfAnkara - 1 != 0) {
      setPlaceOfAnkara(placeOfAnkara - 1);
    }
  }

  function increasePlaseOfAntalya() {
    if (placeOfAntalya + 1 != 5) {
      setPlaceOfAntalya(placeOfAntalya + 1);
    }
  }

  function decreasePlaseOfAntalya() {
    if (placeOfAntalya - 1 != 0) {
      setPlaceOfAntalya(placeOfAntalya - 1);
    }
  }

  function increasePlaseOfBursa() {
    if (placeOfBursa + 1 != 5) {
      setPlaceOfBursa(placeOfBursa + 1);
    }
  }

  function decreasePlaseOfBursa() {
    if (placeOfBursa - 1 != 0) {
      setPlaceOfBursa(placeOfBursa - 1);
    }
  }

  function increasePlaseOfMalatya() {
    if (placeOfMalatya + 1 != 5) {
      setPlaceOfMalatya(placeOfMalatya + 1);
    }
  }

  function decreasePlaseOfMalatya() {
    if (placeOfMalatya - 1 != 0) {
      setPlaceOfMalatya(placeOfMalatya - 1);
    }
  }

  function fenotype() {
    var x;
    if (placeOfAnkara == 1 && placeOfAntalya == 2 && placeOfBursa == 3 && placeOfMalatya == 4) {
      x = document.getElementById("map1243");
      x.hidden = true;
      x = document.getElementById("map1234");
      x.hidden = false;
    } else if (placeOfAnkara == 1 && placeOfAntalya == 2 && placeOfBursa == 4 && placeOfMalatya == 3) {
      x = document.getElementById("map1234");
      x.hidden = true;
      x = document.getElementById("map1243");
      x.hidden = false;
    } else {
      alert("Bir şehre iki kere uğrayamazsınız")
    }

  }


  return (
    <Paper className={classes.root}>
      <Typography color={"primary"} variant="h5" component="h3">
        Gezici Satıcı Problemi (Traveling Salesman Problem) Nedir?
      </Typography>
      <Typography align={"justify"} component="p">
        <br/>Seyyar satıcı problemi şu şekilde tanımlanabilir:

        <br/> - Bir seyyar satıcı var;
        <br/> - Bu satıcı, mallarını n şehirde satmak istiyor;
        <br/> - Öte yandan, mantıklı bir şekilde, bu satıcı bu şehirleri mümkün olan en kısa şekilde ve her bir şehre
        maksimum bir kere uğrayarak turlamak istiyor.
        <br/> Problemin amacı, satıcıya bu en kısa yolu sunabilmektir.
        <br/><br/><br/>
      </Typography>


      <div className={classes.orta}>
        <div className={classes.row}>
          <div className={classes.row}>
            <card3 className={classes.card3}>
              <Typography color="primary" variant="h6" component="h6">
                Genotip
              </Typography>
            </card3>
          </div>
          <div className={classes.row}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Elma"
                  height="100"
                  image={ankara}
                  title="Elma"
                />
                <CardContent>
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Ankara
                  </Typography>
                </CardContent>

              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  increasePlaseOfAnkara();
                }}>
                  <AddIcon/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  decreasePlaseOfAnkara();
                }}>
                  <RemoveIcon/>
                </Fab>
              </CardActions>
              <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
                {placeOfAnkara}
              </Typography>
            </Card>
          </div>
          <div className={classes.row}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Armut"
                  height="100"
                  image={antalya}
                  title="Armut"
                />
                <CardContent>
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Antalya{"\n"}
                  </Typography>
                </CardContent>

              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  increasePlaseOfAntalya();
                }}>
                  <AddIcon/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  decreasePlaseOfAntalya();
                }}>
                  <RemoveIcon/>
                </Fab>
              </CardActions>
              <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
                {placeOfAntalya}
              </Typography>
            </Card>
          </div>
          <div className={classes.row}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Portakal"
                  height="100"
                  image={bursa}
                  title="Portakal"
                />
                <CardContent>
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Bursa
                  </Typography>
                </CardContent>

              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  increasePlaseOfBursa();
                }}>
                  <AddIcon/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  decreasePlaseOfBursa();
                }}>
                  <RemoveIcon/>
                </Fab>
              </CardActions>
              <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
                {placeOfBursa}
              </Typography>
            </Card>
          </div>
          <div className={classes.row}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Kivi"
                  height="100"
                  image={malatya}
                  title="Kivi"
                />
                <CardContent>
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Malatya
                  </Typography>
                </CardContent>

              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  increasePlaseOfMalatya();
                }}>
                  <AddIcon/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  decreasePlaseOfMalatya();
                }}>
                  <RemoveIcon/>
                </Fab>
              </CardActions>
              <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
                {placeOfMalatya}
              </Typography>
            </Card>
          </div>
          <div className={classes.row}>

            <Card className={classes.cardMap}>
              <Typography color="primary" gutterBottom variant="h5" component="h5" align={"center"}>
                <Button variant="contained" color="primary"
                        style={{float: 'center', marginLeft: "2px", marginTop: "5px"}} className="float-right"
                        onClick={() => {
                          fenotype()
                        }}>
                  FENOTİPİ GÖR
                </Button>

              </Typography>


              <div id="map1234"><img src={turkiyeMap1234} width={550}/></div>
              <div id="map1243" hidden="true"><img src={turkiyeMap1243} width={550}/></div>


            </Card>
          </div>

        </div>
      </div>


    </Paper>
  );
}