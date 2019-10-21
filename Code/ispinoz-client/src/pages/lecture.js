import React, {Component} from 'react';
import Appbar from "../components/appbar";

class Lecture extends Component {
  render() {
    return (
      <div className="lecture">
        <Appbar/>
        <h1> Lecture Page</h1>
      </div>
    );
  }
}

export default Lecture;