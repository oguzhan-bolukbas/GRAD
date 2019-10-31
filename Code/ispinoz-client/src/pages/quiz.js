import React, {Component} from 'react';
import Appbar from "../components/appbar";

class Quiz extends Component {
  render() {
    return (
      <div className="quiz">
        <Appbar/>
        <h1>Quiz Page</h1>

      </div>
    );
  }
}

export default Quiz;