import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";

// components
import AuthRoute from "./util/AuthRoute"

// pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import deneme from "./pages/deneme";
import mutasyon from "./pages/mutasyon";
import fitness from "./pages/fitness";
import çaprazlama from "./pages/çaprazlama";
import lecture from "./pages/lecture"
import practice from "./pages/practice"
import quiz from "./pages/quiz"


// MUI
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

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
                <AuthRoute path="/login"  component={login}  authenticated={authenticated}/>
                <AuthRoute path="/signup" component={signup} authenticated={authenticated}/>
                <AuthRoute path="/deneme"  component={deneme}  authenticated={authenticated}/>
                <AuthRoute path="/çaprazlama"  component={çaprazlama}  authenticated={authenticated}/>
                <AuthRoute path="/fitness"  component={fitness}  authenticated={authenticated}/>
                <AuthRoute path="/mutasyon"  component={mutasyon}  authenticated={authenticated}/>
                <Route path="/lecture" component={lecture}/>
                <Route path="/practice" component={practice}/>
                <Route path="/quiz" component={quiz}/>
              </Switch>
            </div>
          </Router>

        </div>



      </MuiThemeProvider>
    );
  }
}

export default App;
