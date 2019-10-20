import React, {Component} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from '@material-ui/core/styles/withStyles'

// Images
import WebsiteIcon from '../images/european.png';
import Background from "../images/DNA.png"

const styles = (theme) => ({
  ...theme.logAndSign
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    }
  }

  componentDidMount() {
    document.body.style.backgroundImage = `url("${Background}")`;
    document.body.style.height = "100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post('/login', userData)
      .then(res => {
        localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        })
      })
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {classes} = this.props;
    const {errors, loading} = this.state;
    return (
      <div className="background">
        <Grid container className={classes.form}>
          <Grid item sm/>
          <Grid item sm>
            <img src={WebsiteIcon} width="99" height="104" alt="finch" className={classes.image}/>
            <Typography variant="h4" className={classes.pageTitle}>
              Login
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField id="email" name="email" type="email" label="Email" className={classes.textField}
                         helperText={errors.email} error={errors.email ? true : false} value={this.state.email}
                         onChange={this.handleChange} fullWidth/>
              <TextField id="password" name="password" type="password" label="Password" className={classes.textField}
                         helperText={errors.password} error={errors.password ? true : false} value={this.state.password}
                         onChange={this.handleChange} fullWidth/>
              {errors.general && (
                <Typography variant="body2" className={classes.customError}>{errors.general}</Typography>)}
              <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Login
                {loading && (<CircularProgress size={30} color="inherit" className={classes.progress}/>)}
              </Button><br/>
              <small>Don't have an account? <Link to="/signup">Signup now!</Link></small>
            </form>
          </Grid>
          <Grid item sm/>
        </Grid>
      </div>
    )
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);