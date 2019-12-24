import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

// MUI Stuff
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Paper from "@material-ui/core/Paper";

// Icons
import {CalendarToday, Person, School, Web} from "@material-ui/icons";

const styles = (theme) => ({
  paper: {
    padding: 20
  },
  profile: {
    '& .image-wrapper': {
      textAlign: 'center',
      position: 'relative',
      '& button': {
        position: 'absolute',
        top: '80%',
        left: '70%'
      }
    },
    '& .profile-image': {
      width: 400,
      height: 400,
      objectFit: 'cover',
      maxWidth: '50%',
      borderRadius: '50%'
    },
    '& .profile-details': {
      margin: '0 0 0 500px',
      textAlign: 'left',
      '& span, svg': {
        verticalAlign: 'middle'
      },
      '& a': {
        color: theme.palette.primary.main
      }
    },
    '& hr': {
      border: 'none',
      margin: '0 0 10px 0'
    },
    '& svg.button': {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  },
  buttons: {
    textAlign: 'center',
    '& a': {
      margin: '20px 10px'
    }
  }
});

class Profile extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {classes, quizResult: {userHandle, userImage, className, finishedAt}} = this.props;
    return (
      <Paper className={classes.paper}>
        <div className={classes.profile}>
          <div className="profile-image">
            <img src={userImage} alt="profile"/>
          </div>
          <div className="profile-details">
            <Person color="primary"/>{' '}{userHandle}<br/>
            <School color="primary"/>{' '}{className}<br/>
            <Web color="primary"/>{' '}<a href={"https://www.github.com/oguzhan-bolukbas"}>github.com/oguzhan-bolukbas</a><br/>
            <CalendarToday color="primary"/>{' '}<span>Joined {dayjs(finishedAt).format('MMM YYYY')}</span>
          </div>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Profile);