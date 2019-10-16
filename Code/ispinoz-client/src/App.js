import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";

// Components
import AuthRoute from "./util/AuthRoute"

// Pages
import home from "./Pages/home";
import login from "./Pages/login";
import signup from "./Pages/signup";

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
                <AuthRoute exact path="/login"  component={login}  authenticated={authenticated}/>
                <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
