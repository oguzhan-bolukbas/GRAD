import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarLectures";
import PaperMutation from "../components/paperMutation";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {Link} from "react-router-dom";


class whatisGA extends Component{
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "300px";
    document.body.style.marginRight = "20px";


  }
  render() {
    return (
      <div className="home">

        <AppbarHome/>
        <PaperMutation/>
        <Button  variant="contained" color="primary"  style={{float: 'right', marginLeft:"2px", marginTop: "5px"}} className="float-right" >
          İLERİ
          <NavigateNextIcon/>
        </Button>

        <Button  variant="contained" color="primary"  style={{float: 'right', marginTop: "5px"}} className="float-right" component={Link} to="/GAUygulamaları" >
          <NavigateBeforeIcon/>
          GERİ
        </Button>

      </div>
    );
  }
}

export default whatisGA;