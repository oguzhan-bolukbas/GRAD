import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import beforebitFlipMutation from "../images/beforebitFlipMutation.png";
import afterbitFlipMutation from "../images/afterbitFlipMutation.png";
import beforeSwapMutation from "../images/beforeSwapMutation.png";
import afterSwapMutation from "../images/afterSwapMutation.png";
import beforeScrambleMutation from "../images/beforeScrambleMutation.png";
import afterScrambleMutation from "../images/afterScrambleMutation.png";
import beforeInversionMutation from "../images/beforeInversionMutation.png";
import afterInvsersionMutation from "../images/afterInvsersionMutation.png";


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
        Mutasyon Çeşitleri
      </Typography>

      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Bit Çevirme Mutasyonu (Bit Flip Mutation) : </b>
        Kromozom üzerinde bir veya birden fazla gen (bit) seçilir ve çevrilerek yeni birey oluşturulur.
      </Typography>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Önce <br/><br/>
        </Typography>
        <img src={beforebitFlipMutation} width={350}/>
      </Grid>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Sonra <br/><br/>
        </Typography>
        <img src={afterbitFlipMutation} width={350}/>
      </Grid>


      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Değişme Mutasyonu (Swap Mutation) : </b>
        Kromozom üzerinde rastgele iki pozisyon seçilir ve değerleri değiştirilerek yeni birey oluşturulur. Bu mutasyon
        çeşidi
        genel olarak permutasyon kodlamada (permutation representation) kullanılır.
      </Typography>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Önce <br/><br/>
        </Typography>
        <img src={beforeSwapMutation} width={350}/>
      </Grid>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Sonra <br/><br/>
        </Typography>
        <img src={afterSwapMutation} width={350}/>
      </Grid>


      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Mücadele Mutasyonu (Scramble Mutation) : </b>
        Kromozom üzerinde bir gen kümesi seçilir. Kümedeki genler rastgele yer değiştirilerek yeni birey oluşturulur.
      </Typography>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Önce <br/><br/>
        </Typography>
        <img src={beforeScrambleMutation} width={350}/>
      </Grid>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Sonra <br/><br/>
        </Typography>
        <img src={afterScrambleMutation} width={350}/>
      </Grid>

      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Ters Çevirme Mutasyonu (Inversion Mutation) : </b>
        Mücadele Mutasyonuna benzer şekilde kromozom üzerinden bir gen kümesi seçilir. Rastgele yer
        değişmek yerine küme ters çevrilerek yeni birey oluşturulur.
      </Typography>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Önce <br/><br/>
        </Typography>
        <img src={beforeInversionMutation} width={350}/>
      </Grid>

      <br/>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Sonra <br/><br/>
        </Typography>
        <img src={afterInvsersionMutation} width={350}/>
      </Grid>


    </Paper>
  );
}