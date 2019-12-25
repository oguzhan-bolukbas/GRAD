import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarHome";
import PaperMutationTypes from "../components/paperMutationTypes";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {Link} from "react-router-dom";


class mutation extends Component {
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "370px";
    document.body.style.marginRight = "100px";


  }

  render() {
    return (
      <div className="home">

        <AppbarHome/>
        <PaperMutationTypes/>
        <Button variant="contained" color="primary" style={{float: 'right', marginLeft: "2px", marginTop: "5px"}}
                className="float-right" component={Link} to="/dersler/uygunluk">
          İLERİ
          <NavigateNextIcon/>
        </Button>

        <Button variant="contained" color="primary" style={{float: 'right', marginTop: "5px"}} className="float-right"
                component={Link} to="/dersler/mutasyon/mutasyon-nedir">
          <NavigateBeforeIcon/>
          GERİ
        </Button>

      </div>
    );
  }
}

export default mutation;