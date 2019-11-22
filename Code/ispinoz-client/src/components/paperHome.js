import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import European from "../images/European.png";
import Links from '@material-ui/core/Link';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "600px",
    height: "350px",
  },
  mar: {
    marginTop: "40px"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();
  //const preventDefault = event => event.preventDefault();
  return (
    <Paper className={classes.root}>
      <div className="row">
        <div style={{display: 'inline-block'}}>
          <img src={European} width={75} alt={""}/>
        </div>
        <div style={{display: 'inline-block'}}>
          <h1 style={{color: '#00bcd5', marginTop: '-50'}}>ispinoz.com</h1>
        </div>
      </div>
      <Typography component="p" align={"justify"}>
        İspinoz.com size Genetik Algoritmayı öğretmeyi ve problem ve quiz çözerek pratik yapabilmenizi sağlayan bir web
        sitesidir.
        <Links href="/GAnedir" onClick={"/GAnedir"} className={classes.link} component={""}>{" "} Dersler {" "}</Links>
        sekmesinden Genetik Algoritmayı öğrenmeye,
        <Links href="/quiz" onClick={"/quiz"} className={classes.link} component={""}>{" "} Quiz {" "}</Links>
        sekmesinden öğrendiğiniz bilgileri ölçmeye,
        <Links href="/problemler" onClick={"/problemler"} className={classes.link} component={""}>{" "} Problemler {" "}</Links>
        sekmesinden çeşitli problemleri uygulamaya başlayabilirsiniz.
      </Typography>
      <div className={classes.mar}>
        <Button variant="contained" color="primary" style={{float: 'right'}} className="float-right" component={Link}
                to="/problemler">PRATİK YAP</Button>
        <Button variant="contained" color="primary" style={{float: 'left'}} className="float-left" component={Link}
                to="/GAnedir">ÖĞRENMEYE BAŞLA</Button>
      </div>
    </Paper>
  );
}