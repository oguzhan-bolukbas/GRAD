import React, {Component} from 'react';
import '../App.css'
// Components
import PaperLearnKnapsackProblemPage from "../components/paperLearnKnapsackProblemPage";
import Appbar from "../components/appbarProblems";


class learnKnapsackProblemPage extends Component {
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "0px";
  }

  render() {
    return (
      <div className="home">
        <Appbar/>
        <PaperLearnKnapsackProblemPage/>

      </div>
    );
  }
}

export default learnKnapsackProblemPage;