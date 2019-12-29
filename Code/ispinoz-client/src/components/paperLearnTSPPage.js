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

import kastamonu from "../images/kastamonu.png";
import antalya from "../images/antalya.png";
import malatya from "../images/malatya.png";
import bursa from "../images/bursa.png";


import map1234 from "../images/map1234.png";
import map1243 from "../images/map1243.png";
import map1324 from "../images/map1324.png";
import map1342 from "../images/map1342.png";
import map1423 from "../images/map1423.png";
import map1432 from "../images/map1432.png";


import map2134 from "../images/map2134.png";
import map2143 from "../images/map2143.png";
import map2314 from "../images/map2314.png";
import map2341 from "../images/map2341.png";
import map2413 from "../images/map2413.png";
import map2431 from "../images/map2431.png";


import map3124 from "../images/map3124.png";
import map3142 from "../images/map3142.png";
import map3214 from "../images/map3214.png";
import map3241 from "../images/map3241.png";
import map3412 from "../images/map3412.png";
import map3421 from "../images/map3421.png";


import map4123 from "../images/map4123.png";
import map4132 from "../images/map4132.png";
import map4213 from "../images/map4213.png";
import map4231 from "../images/map4231.png";
import map4312 from "../images/map4312.png";
import map4321 from "../images/map4321.png";

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
    maxWidth: 100,
    align: "center",
    alignItems: "center",
    centered: true,
    alignmentBaseline: "center",
    content: "center",
    justifyContent: "center",
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
  var lastMapName = "map1234";

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
    // map1...
    if (placeOfAnkara == 1 && placeOfAntalya == 2 && placeOfBursa == 3 && placeOfMalatya == 4) {
      clearMap();
      setMap("map1234")

    } else if (placeOfAnkara == 1 && placeOfAntalya == 2 && placeOfBursa == 4 && placeOfMalatya == 3) {
      clearMap();
      setMap("map1243")
    } else if (placeOfAnkara == 1 && placeOfAntalya == 3 && placeOfBursa == 2 && placeOfMalatya == 4) {
      clearMap();
      setMap("map1324")
    } else if (placeOfAnkara == 1 && placeOfAntalya == 3 && placeOfBursa == 4 && placeOfMalatya == 2) {
      clearMap();
      setMap("map1342")
    } else if (placeOfAnkara == 1 && placeOfAntalya == 4 && placeOfBursa == 2 && placeOfMalatya == 3) {
      clearMap();
      setMap("map1423")
    } else if (placeOfAnkara == 1 && placeOfAntalya == 4 && placeOfBursa == 3 && placeOfMalatya == 2) {
      clearMap();
      setMap("map1432")
    }
    // map2...
    else if (placeOfAnkara == 2 && placeOfAntalya == 1 && placeOfBursa == 3 && placeOfMalatya == 4) {
      clearMap();
      setMap("map2134")
    } else if (placeOfAnkara == 2 && placeOfAntalya == 1 && placeOfBursa == 4 && placeOfMalatya == 3) {
      clearMap();
      setMap("map2143")
    } else if (placeOfAnkara == 2 && placeOfAntalya == 3 && placeOfBursa == 1 && placeOfMalatya == 4) {
      clearMap();
      setMap("map2314")
    } else if (placeOfAnkara == 2 && placeOfAntalya == 3 && placeOfBursa == 4 && placeOfMalatya == 1) {
      clearMap();
      setMap("map2341")
    } else if (placeOfAnkara == 2 && placeOfAntalya == 4 && placeOfBursa == 1 && placeOfMalatya == 3) {
      clearMap();
      setMap("map2413")
    } else if (placeOfAnkara == 2 && placeOfAntalya == 4 && placeOfBursa == 3 && placeOfMalatya == 1) {
      clearMap();
      setMap("map2431")
    }
    //map3...
    else if (placeOfAnkara == 3 && placeOfAntalya == 1 && placeOfBursa == 2 && placeOfMalatya == 4) {
      clearMap();
      setMap("map3124")
    } else if (placeOfAnkara == 3 && placeOfAntalya == 1 && placeOfBursa == 4 && placeOfMalatya == 2) {
      clearMap();
      setMap("map3142")
    } else if (placeOfAnkara == 3 && placeOfAntalya == 2 && placeOfBursa == 1 && placeOfMalatya == 4) {
      clearMap();
      setMap("map3214")
    } else if (placeOfAnkara == 3 && placeOfAntalya == 2 && placeOfBursa == 4 && placeOfMalatya == 1) {
      clearMap();
      setMap("map3241")
    } else if (placeOfAnkara == 3 && placeOfAntalya == 4 && placeOfBursa == 1 && placeOfMalatya == 2) {
      clearMap();
      setMap("map3412")
    } else if (placeOfAnkara == 3 && placeOfAntalya == 4 && placeOfBursa == 2 && placeOfMalatya == 1) {
      clearMap();
      setMap("map3421")
    }
    //map4...
    else if (placeOfAnkara == 4 && placeOfAntalya == 1 && placeOfBursa == 2 && placeOfMalatya == 3) {
      clearMap();
      setMap("map4123")
    } else if (placeOfAnkara == 4 && placeOfAntalya == 1 && placeOfBursa == 3 && placeOfMalatya == 2) {
      clearMap();
      setMap("map4132")
    } else if (placeOfAnkara == 4 && placeOfAntalya == 2 && placeOfBursa == 1 && placeOfMalatya == 3) {
      clearMap();
      setMap("map4213")
    } else if (placeOfAnkara == 4 && placeOfAntalya == 2 && placeOfBursa == 3 && placeOfMalatya == 1) {
      clearMap();
      setMap("map4231")
    } else if (placeOfAnkara == 4 && placeOfAntalya == 3 && placeOfBursa == 1 && placeOfMalatya == 2) {
      clearMap();
      setMap("map4312")
    } else if (placeOfAnkara == 4 && placeOfAntalya == 3 && placeOfBursa == 2 && placeOfMalatya == 1) {
      clearMap();
      setMap("map4321")
    } else {
      alert("Bir şehre iki kere uğrayamazsınız")
    }
  }

  function clearMap() {
    //map1...
    var x = document.getElementById("map1234");
    x.hidden = true;
    x = document.getElementById("map1243");
    x.hidden = true;
    x = document.getElementById("map1324");
    x.hidden = true;
    x = document.getElementById("map1342");
    x.hidden = true;
    x = document.getElementById("map1423");
    x.hidden = true;
    x = document.getElementById("map1432");
    x.hidden = true;
    //map2...
    x = document.getElementById("map2134");
    x.hidden = true;
    x = document.getElementById("map2143");
    x.hidden = true;
    x = document.getElementById("map2314");
    x.hidden = true;
    x = document.getElementById("map2341");
    x.hidden = true;
    x = document.getElementById("map2413");
    x.hidden = true;
    x = document.getElementById("map2431");
    x.hidden = true;
    //map3...
    x = document.getElementById("map3124");
    x.hidden = true;
    x = document.getElementById("map3142");
    x.hidden = true;
    x = document.getElementById("map3214");
    x.hidden = true;
    x = document.getElementById("map3241");
    x.hidden = true;
    x = document.getElementById("map3412");
    x.hidden = true;
    x = document.getElementById("map3421");
    x.hidden = true;
    //map4...
    x = document.getElementById("map4123");
    x.hidden = true;
    x = document.getElementById("map4132");
    x.hidden = true;
    x = document.getElementById("map4213");
    x.hidden = true;
    x = document.getElementById("map4231");
    x.hidden = true;
    x = document.getElementById("map4312");
    x.hidden = true;
    x = document.getElementById("map4321");
    x.hidden = true;
  }

  function setMap(mapName) {
    var x = document.getElementById(mapName);
    x.hidden = false;
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
                  image={kastamonu}
                  title="Elma"
                />
                <CardContent>
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Kastamonu
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
                <CardContent className={classes.orta}>
                  <Typography color="primary" gutterBottom variant="h7" component="h7" align="justify">
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

              <div id="map1234"><img src={map1234} width={550}/></div>
              <div id="map1243" hidden="true"><img src={map1243} width={550}/></div>
              <div id="map1324" hidden="true"><img src={map1324} width={550}/></div>
              <div id="map1342" hidden="true"><img src={map1342} width={550}/></div>
              <div id="map1423" hidden="true"><img src={map1423} width={550}/></div>
              <div id="map1432" hidden="true"><img src={map1432} width={550}/></div>

              <div id="map2134" hidden="true"><img src={map2134} width={550}/></div>
              <div id="map2143" hidden="true"><img src={map2143} width={550}/></div>
              <div id="map2314" hidden="true"><img src={map2314} width={550}/></div>
              <div id="map2341" hidden="true"><img src={map2341} width={550}/></div>
              <div id="map2413" hidden="true"><img src={map2413} width={550}/></div>
              <div id="map2431" hidden="true"><img src={map2431} width={550}/></div>

              <div id="map3124" hidden="true"><img src={map3124} width={550}/></div>
              <div id="map3142" hidden="true"><img src={map3142} width={550}/></div>
              <div id="map3214" hidden="true"><img src={map3214} width={550}/></div>
              <div id="map3241" hidden="true"><img src={map3241} width={550}/></div>
              <div id="map3412" hidden="true"><img src={map3412} width={550}/></div>
              <div id="map3421" hidden="true"><img src={map3421} width={550}/></div>

              <div id="map4123" hidden="true"><img src={map4123} width={550}/></div>
              <div id="map4132" hidden="true"><img src={map4132} width={550}/></div>
              <div id="map4213" hidden="true"><img src={map4213} width={550}/></div>
              <div id="map4231" hidden="true"><img src={map4231} width={550}/></div>
              <div id="map4312" hidden="true"><img src={map4312} width={550}/></div>
              <div id="map4321" hidden="true"><img src={map4321} width={550}/></div>

            </Card>
          </div>

        </div>
      </div>


    </Paper>
  );
}