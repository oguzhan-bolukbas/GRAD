import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarLectures";
import PaperWhatIsGA from "../components/paperWhatIsGA";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
//import { Buttons, Icon } from 'semantic-ui-react'
//import { Buttons, Icons} from 'semantic-ui-react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


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
        <Button  variant="contained" color="primary"  style={{float: 'right'}} className="float-right" component={Link} to="/GAUygulamaları">
          İLERİ
          <NavigateNextIcon/>
        </Button>
        <PaperWhatIsGA/>




        {/*<Buttons icon labelPosition='right'>*/}
        {/*  Next*/}
        {/*  <Icon name='right arrow' />*/}
        {/*</Buttons>*/}



      </div>
    );
  }
}

export default whatisGA;