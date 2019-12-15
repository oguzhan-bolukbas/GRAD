import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import elma from "../images/elma.png";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import armut from "../images/armut.png";
import portakal from "../images/portakal.png";
import kivi from "../images/kivi.png";
import cilek from "../images/cilek.png";
import bag from "../images/bag.png";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


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
  var capacity = 20;


  function isCapacityExceeded(value) {
    if (value > capacity)
      return false;
    else
      return true;
  }

  function addElma() {
    if (countElma == 0 && isCapacityExceeded(countweight + 5)) {
      var x = document.getElementById("elmaToBag");
      x.hidden = false;
      setCountElma(countElma + 1);
      setCountweight(countweight + 5);
      setCountvalue(countvalue + 1);
    }
  }

  function removeElma() {
    if (countElma == 1) {
      var x = document.getElementById("elmaToBag");
      x.hidden = true;
      setCountElma(countElma - 1);
      setCountweight(countweight - 5);
      setCountvalue(countvalue - 1);
    }
  }

  function addArmut() {
    if (countArmut == 0 && isCapacityExceeded(countweight + 7)) {
      var x = document.getElementById("armutToBag");
      x.hidden = false;
      setCountArmut(countArmut + 1);
      setCountweight(countweight + 7);
      setCountvalue(countvalue + 2);
    }
  }

  function removeArmut() {
    if (countArmut == 1) {
      var x = document.getElementById("armutToBag");
      x.hidden = true;
      setCountArmut(countArmut - 1);
      setCountweight(countweight - 7);
      setCountvalue(countvalue - 2);
    }
  }

  function addLimon() {
    if (countPortakal == 0 && isCapacityExceeded(countweight + 6)) {
      var x = document.getElementById("limonToBag");
      x.hidden = false;
      setCountPortakal(countPortakal + 1);
      setCountweight(countweight + 6);
      setCountvalue(countvalue + 3);
    }
  }

  function removeLimon() {
    if (countPortakal == 1) {
      var x = document.getElementById("limonToBag");
      x.hidden = true;
      setCountPortakal(countPortakal - 1);
      setCountweight(countweight - 6);
      setCountvalue(countvalue - 3);
    }
  }

  function addKivi() {
    if (countKivi == 0 && isCapacityExceeded(countweight + 4)) {
      var x = document.getElementById("kiviToBag");
      x.hidden = false;
      setCountKivi(countKivi + 1);
      setCountweight(countweight + 4);
      setCountvalue(countvalue + 4);
    }
  }

  function removeKivi() {
    if (countKivi == 1) {
      var x = document.getElementById("kiviToBag");
      x.hidden = true;
      setCountKivi(countKivi - 1);
      setCountweight(countweight - 4);
      setCountvalue(countvalue - 4);
    }
  }

  function addCilek() {
    if (countCilek == 0 && isCapacityExceeded(countweight + 3)) {
      var x = document.getElementById("cilekToBag");
      x.hidden = false;
      setCountCilek(countCilek + 1);
      setCountweight(countweight + 3);
      setCountvalue(countvalue + 5);
    }
  }

  function removeCilek() {
    if (countCilek == 1) {
      var x = document.getElementById("cilekToBag");
      x.hidden = true;
      setCountCilek(countCilek - 1);
      setCountweight(countweight - 3);
      setCountvalue(countvalue - 5);
    }
  }

  const [countElma, setCountElma] = useState(0);
  const [countArmut, setCountArmut] = useState(0);
  const [countPortakal, setCountPortakal] = useState(0);
  const [countKivi, setCountKivi] = useState(0);
  const [countCilek, setCountCilek] = useState(0);
  const [countweight, setCountweight] = useState(0);
  const [countvalue, setCountvalue] = useState(0);
  //

  return (
    <Paper className={classes.root}>
      <Typography color={"primary"} variant="h5" component="h3">
        Sırt Çantası (Knapsack) Problemi Nedir?
      </Typography>
      <Typography align={"justify"} component="p">
        <br/>Sırt çantası (ya da sınırlı kapasiteli herhangi bir alan), en değerli (ya da faydalı)
        eşyalarla nasıl doldurulur, sorusuna sırt çantası ya da torba problemi denir. Sırt çantası bir optimizasyon
        problemidir. Tanımı ise şöyledir:

        <br/>1) Ağırlıkları (w) ve değeri/katkısı (v) bilinen n tane nesne, kapasitesi w olan bir çantaya koyulacaktır.

        <br/>2) Çantayı kapasitesini aşmayacak şekilde en değerli olan nesnelerle doldurmak için nesnelerden hangileri
        çantaya koyulmalıdır.
        <br/><br/><br/>
      </Typography>


      <div className={classes.row}>
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
                  height="80"
                  image={elma}
                  title="Elma"
                />
                <CardContent>
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Elma
                  </Typography>
                </CardContent>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Değer: 1 {"\n"}
                </Typography>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Ağırlık: 5
                </Typography>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  addElma()
                }}>
                  <AddIcon/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  removeElma()
                }}>
                  <RemoveIcon/>
                </Fab>
              </CardActions>
              <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
                {countElma}
              </Typography>
            </Card>
          </div>
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
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Armut{"\n"}
                  </Typography>
                </CardContent>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Değer: 2 {"\n"}
                </Typography>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Ağırlık: 7
                </Typography>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  addArmut()
                }}>
                  <AddIcon/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  removeArmut()
                }}>
                  <RemoveIcon/>
                </Fab>
              </CardActions>
              <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
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
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Limon
                  </Typography>
                </CardContent>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Değer: 3{"\n"}
                </Typography>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Ağırlık: 6
                </Typography>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  addLimon()
                }}>
                  <AddIcon/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  removeLimon()
                }}>
                  <RemoveIcon/>
                </Fab>
              </CardActions>
              <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
                {countPortakal}
              </Typography>
            </Card>
          </div>
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
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Kivi
                  </Typography>
                </CardContent>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Değer: 4 {"\n"}
                </Typography>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Ağırlık: 4
                </Typography>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  addKivi()
                }}>
                  <AddIcon/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  removeKivi()
                }}>
                  <RemoveIcon/>
                </Fab>
              </CardActions>
              <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
                {countKivi}
              </Typography>
            </Card>
          </div>
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
                  <Typography color="primary" gutterBottom variant="h7" component="h7">
                    Çilek
                  </Typography>
                </CardContent>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Değer: 5 {"\n"}
                </Typography>
                <Typography color="primary" gutterBottom variant="h7" component="h7">
                  Ağırlık: 3
                </Typography>
              </CardActionArea>
              <CardActions>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  addCilek()
                }}>
                  <AddIcon/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin} onClick={() => {
                  removeCilek()
                }}>
                  <RemoveIcon/>
                </Fab>
              </CardActions>
              <Typography color="primary" gutterBottom variant="h5" component="h4" align={"center"}>
                {countCilek}
              </Typography>
            </Card>
          </div>
        </div>


        <div className={classes.row}>
          <card3 className={classes.card4}>
            <Typography color="primary" variant="h6" component="h6">
              Fenotip
            </Typography>

            <Typography color="primary" gutterBottom variant="h7" component="h7" align={"center"}>
              Kapasite: 20 <br/>
            </Typography>
            <Typography color="primary" gutterBottom variant="h7" component="h7" align={"center"}>
              Ağırlık: {countweight} <br/>
            </Typography>
            <Typography color="primary" gutterBottom variant="h7" component="h7" align={"center"}>
              Değer: {countvalue} <br/>
            </Typography>


            <div className={classes.row}>
              <div id="elmaToBag" className={classes.marginLeft} hidden="true"><img src={elma} width={50}/>
              </div>
              <div id="armutToBag" className={classes.margin5px} hidden="true"><img src={armut} width={50}/></div>
              <div id="limonToBag" className={classes.margin5px} hidden="true"><img src={portakal} width={50}/></div>
              <div id="kiviToBag" className={classes.margin5px} hidden="true"><img src={kivi} width={50}/></div>
              <div id="cilekToBag" className={classes.margin5px} hidden="true"><img src={cilek} width={50}/></div>
            </div>

            <img src={bag} width={300}/>


          </card3>
        </div>
      </div>


    </Paper>
  );
}