import React, {Component} from 'react';
import '../App.css'
import withStyles from "@material-ui/core/styles/withStyles";
import AppbarProblems from "../components/appbarProblems";
import Profile from "../components/Profile";


class Profile extends React.Component {
  render () {
    return (
      <div className="">
      <AppbarProblems/>
      <Profile/>
      </div>
    )
  }
}


export default withStyles(styles)(Profile);