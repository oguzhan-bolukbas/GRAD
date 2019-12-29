import React from 'react';
import quizData from "../components/QuizData";
import Appbar from "../components/appbarProblems";
import "../styles.css";
import Button from "@material-ui/core/Button";

class quizLectures extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {

    const {myAnswer, answer, score} = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }


    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <Appbar/>
          <h3>Puanınız {this.state.score * 10} / {quizData.length * 10}  </h3>
          <p>
            Doğru Cevaplar Listesi
            <ul>
              {quizData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Appbar/>
          <h1>{this.state.questions} </h1>
          <span>{`Soru: ${currentQuestion + 1} / ${quizData.length} `}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < quizData.length - 1 && (
            <Button  variant="contained" color="primary" disabled={this.state.disabled}  onClick={this.nextQuestionHandler} >
            İLERİ  </Button>

          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (

            <Button variant="contained" color="primary" onClick={() => {
              this.finishHandler()
            }}>
              Quizi Bitir </Button>
          )}
        </div>
      );
    }
  }
}

export default quizLectures;