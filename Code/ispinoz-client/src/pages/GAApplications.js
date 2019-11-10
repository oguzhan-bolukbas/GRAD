import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarLectures";
import PaperGAApplications from "../components/paperGAApplications";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


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
        <PaperGAApplications/>
        <Button  variant="contained" color="primary"  style={{float: 'right', marginLeft:"2px", marginTop: "5px"}} className="float-right" component={Link} to="/mutasyon">
          İLERİ <NavigateNextIcon/> </Button>
        <Button  variant="contained" color="primary"  style={{float: 'right', marginTop: "5px"}} className="float-right" component={Link} to="/GAnedir" >
          <NavigateBeforeIcon/> GERİ </Button>

      </div>
    );
  }
}

export default whatisGA;