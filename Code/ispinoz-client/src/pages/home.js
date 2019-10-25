import React, {Component} from 'react';
import '../App.css'

// Components
import Appbar from "../components/appbar";
import Stepper from "../components/stepper";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";


class Home extends Component{
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "300px";

  }
  render() {
    return (
      <div className="home">
        <Appbar/>
        <Stepper/>
      </div>
    );
  }
}

export default Home;