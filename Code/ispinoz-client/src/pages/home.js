import React, {Component} from 'react';
import '../App.css'

// Components
import Appbar from "../components/appbar";
import {Stepper} from "@material-ui/core";

class Home extends Component{
  componentDidMount() {
    document.body.style.background = "#333";
    document.body.style.height = "100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
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