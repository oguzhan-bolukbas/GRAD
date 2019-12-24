import React, {Component} from 'react';
import '../App.css'
import AppbarProblems from "../components/appbarProblems";
import axios from "axios";
import QuizResult from "../components/QuizResult"

class quizResults extends Component {
  state = {
    quizResults: null
  };
  componentDidMount() {
    axios.get("/quizResults")
      .then(res => {
        this.setState({
          quizResults: res.data
        })
      })
      .catch(err => console.log(err));
  }

  render () {
    let recentQuizResults = this.state.quizResults ? (
      this.state.quizResults.map(quizResult => <QuizResult key={quizResult.quizResultId} quizResult={quizResult}/>)
    ) : <p>Loading...</p>;
    return (
      <div className="">
        <AppbarProblems/>
        {recentQuizResults}
        {/*<Profile/>*/}
      </div>
    )
  }
}

export default quizResults;