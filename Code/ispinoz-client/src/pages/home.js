import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarLectures";
import PaperHome from "../components/paperHome";


class Home extends Component{
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "450px";


  }
  render() {
    return (
      <div className="home">
        <AppbarHome/>
        <PaperHome/>


      </div>
    );
  }
}

export default Home;