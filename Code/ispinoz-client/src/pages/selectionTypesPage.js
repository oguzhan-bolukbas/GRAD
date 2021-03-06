import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarHome";
import PaperSelectionTypesPage from "../components/paperSelectionTypesPage";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


class geneticRepresentationPage extends Component {
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "370px";
    document.body.style.marginRight = "100px";
  }
  render() {
    return (
      <div className="home">
        <AppbarHome/>
        <PaperSelectionTypesPage/>
        <Button variant="contained" color="primary" style={{float: 'left', marginTop: "5px"}} className="float-right"
                component={Link} to="/dersler/genetik-kodlama">
          <NavigateBeforeIcon/> GERİ </Button>
        <Button variant="contained" color="primary" style={{float: 'left', marginLeft: "2px", marginTop: "5px"}}
                className="float-right" component={Link} to="/referanslar">
          İLERİ <NavigateNextIcon/> </Button>
      </div>
    );
  }
}

export default geneticRepresentationPage;