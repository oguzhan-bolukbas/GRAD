import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarHome";
import PaperHome from "../components/paperHome";


class Home extends Component{
  componentDidMount() {
    document.body.style.background = "#fff";
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