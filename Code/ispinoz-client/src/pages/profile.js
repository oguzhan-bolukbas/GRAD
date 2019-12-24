import React, {Component} from 'react';
import '../App.css'
import withStyles from "@material-ui/core/styles/withStyles";
import AppbarProblems from "../components/appbarProblems";
import ProfileComponent from "../components/Profile";
import axios from "axios";
import QuizResult from "../components/QuizResult";

class Profile extends Component {
  state = {
    quizResults: null
  };
  componentDidMount() {
    axios.get("/quizResults")
      .then(res => {
        let result = [];
        res.data.forEach((req) => {
          if (req.userHandle === "Oğuzhan BÖLÜKBAŞ"){
            result.push(req);
          }
        });
        this.setState({
          quizResults: result
        });
      })
      .catch(err => console.log(err));
  }
  render () {
    let profile = this.state.quizResults ? (
      this.state.quizResults.map(quizResult => <ProfileComponent key={quizResult.quizResultId} quizResult={quizResult}/>)
    ) : <p>Loading...</p>;

    let recentQuizResults = this.state.quizResults ? (
      this.state.quizResults.map(quizResult => <QuizResult key={quizResult.quizResultId} quizResult={quizResult}/>)
    ) : <p>Loading...</p>;

    return (
      <div className="">
        <AppbarProblems/>
        {profile}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {recentQuizResults}
      </div>
    )
  }
}

export default Profile;