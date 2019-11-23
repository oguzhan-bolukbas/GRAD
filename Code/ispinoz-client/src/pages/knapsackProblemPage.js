import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarKnapsack from "../components/appbarKnapsack";


class knapsackProblemPage extends Component{
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "370px";
    document.body.style.marginRight = "100px";


  }
  render() {
    return (
      <div className="home">
        <AppbarKnapsack/>
      </div>
    );
  }
}

export default knapsackProblemPage;