import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import beforeMutation from "../images/beforeMutation.png";
import afterMutation from "../images/afterMutation.png";


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
        Mutasyon Nedir?
      </Typography>
      <Typography align={"justify"} component="p">
        <br/>Tıpkı biyolojik terimlerde olduğu gibi, hipotezleri en uygun hale
        getirmek için GA'larda mutasyon kullanılır. Genel olarak az miktarda kullanılan
        mutasyon, basit bir şekilde rastgele bir genin bitini çevirir ve tüm kromozomu, potansiyel yerel
        minimumdan kaçmak için bir strateji olan sonraki nesle iter. <br/><br/><br/>
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Önce <br/><br/>
        </Typography>

        <img src={beforeMutation} width={350}/>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography color={"primary"} component="p">
          Mutasyondan Sonra <br/><br/>
        </Typography>
        <img src={afterMutation} width={350}/>
      </Grid>

    </Paper>
  );
}