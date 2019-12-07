import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarProblems from "../components/appbarProblems";

class mutation extends Component{
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "370px";
    document.body.style.marginRight = "100px";
  }
  render() {
    return (
      <div className="home">
        <AppbarProblems/>
      </div>
    );
  }
}

export default mutation;