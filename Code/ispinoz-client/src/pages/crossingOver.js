import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarHome";
import PaperCrossingOver from "../components/paperCrossingOver";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {Link} from "react-router-dom";


class crossingOver extends Component{
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "370px";
    document.body.style.marginRight = "100px";


  }
  render() {
    return (
      <div className="home">

        <AppbarHome/>
        <PaperCrossingOver/>
        <Button  variant="contained" color="primary"  style={{float: 'right', marginLeft:"2px", marginTop: "5px"}} className="float-right" >
          İLERİ
          <NavigateNextIcon/>
        </Button>

        <Button  variant="contained" color="primary"  style={{float: 'right', marginTop: "5px"}} className="float-right" component={Link} to="/" >
          <NavigateBeforeIcon/>
          GERİ
        </Button>

      </div>
    );
  }
}

export default crossingOver;