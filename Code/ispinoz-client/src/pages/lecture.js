import React, {Component} from 'react';
import AppbarLectures from "../components/appbarLectures";

class Lecture extends Component {
  render() {
    return (
      <div className="lecture">
        <AppbarLectures/>
        <h1> Lecture Page</h1>
      </div>
    );
  }
}

export default Lecture;