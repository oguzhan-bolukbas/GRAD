import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarTSP from "../components/appbarTSP";


class tspProblemPage extends Component{
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "370px";
    document.body.style.marginRight = "100px";


  }
  render() {
    return (
      <div className="home">
        <AppbarTSP/>
      </div>
    );
  }
}

export default tspProblemPage;