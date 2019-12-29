import React, {Component} from 'react';
import '../App.css'
// Components
import PaperLearnTSPPage from "../components/paperLearnTSPPage";
import Appbar from "../components/appbarProblems";


class learnTSPPage extends Component {
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "0px";
  }

  render() {
    return (
      <div className="home">
        <Appbar/>
        <PaperLearnTSPPage/>

      </div>
    );
  }
}

export default learnTSPPage;