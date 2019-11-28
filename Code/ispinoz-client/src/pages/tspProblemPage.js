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
import App from "../App";

const useStyles = makeStyles({

  card: {
    maxWidth: 60,
  },
  row: {
    display: "flex",
    marginTop: "5px",
 marginBottom:"5px",
    marginRight: "10px"
  },
  rectangle: {
    width: 35 ,
    height: 35,
    backgroundColor: '#EB9694'
  }
});


function Square(props) {
  return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>

  );
}

class Board extends React.Component {

  renderSquare(i) {

    return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    );
  }

  render() {
    const classes = useStyles();
    return (
        <div>
          <div className={classes.row}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
          </div>



        </div>

    );
  }
}
