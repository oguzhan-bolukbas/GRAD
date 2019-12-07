import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";

// MUI
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// components
import AuthRoute from "./util/AuthRoute"

// pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import crossingOver from "./pages/crossingOver";
import practice from "./pages/practice"
import quiz from "./pages/quiz"
import whatisGA from "./pages/whatisGA"
import gaWorkingMechanism from "./pages/GAWorkingMechanism"
import QuizLectures from "./pages/quizLectures"
import QuizProblems from "./pages/quizProblems"
//import knapsackLecturePage from "./pages/"
import knapsackProblemPage from "./pages/knapsackProblemPage"
import tspProblemPage from "./pages/tspProblemPage"
import gaApplications from "./pages/GAApplications"
import mutation from "./pages/mutation"
import geneAndChoromosome from "./pages/geneChoromosomeAndPopulationPage"
import crossOverTypes from "./pages/CrossOverTypesPage"
import profile from "./pages/profile"
import learningHistory from "./pages/learningHistory"
import settings from "./pages/settings"

const theme = createMuiTheme(themeFile);
const token = localStorage.FBIdToken;
let authenticated;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <div className="container">
              <Switch>
                <Route exact path="/" component={home}/>
                <AuthRoute path="/girisyap"  component={login}  authenticated={authenticated}/>
                <AuthRoute path="/kayitol" component={signup} authenticated={authenticated}/>
                <Route path="/dersler/caprazlama/caprazlama-nedir"  component={crossingOver}/>
                <Route path="/GAnedir" component={whatisGA}/>
                <Route exact path="/problemler" component={practice}/>
                <Route path="/quiz" component={quiz}/>
                <Route path="/GAUygulamaları" component={gaApplications}/>
                <Route path="/GANasılÇalışır" component={gaWorkingMechanism}/>
                <Route path="/quizLectures" component={QuizLectures}/>
                <Route path="/quizProblems" component={QuizProblems}/>
                <Route path="/sırtÇantasıProlemiUygula" component={knapsackProblemPage}/>
                <Route path="/geziciSatıcıProblemiUygula" component={tspProblemPage}/>
                <Route path="/mutasyon" component={mutation}/>
                <Route path="/dersler/gen-kromozom-populasyon" component={geneAndChoromosome}/>
                <Route path="/dersler/caprazlama/caprazlama-cesitleri" component={crossOverTypes}/>
                <Route path="/profil" component={profile}/>
                <Route path="/ogrenme-gecmisi" component={learningHistory}/>
                <Route path="/ayarlar" component={settings}/>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;