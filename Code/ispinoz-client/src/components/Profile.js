import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// MUI Stuff
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Paper from "@material-ui/core/Paper";
// Icons
import {CalendarToday, Person, School, Web} from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  paper: {
    marginLeft: '300px',
    padding: 20,
    width: "600px",
    height: "475px"
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
      width: 300,
      height: 300,
      objectFit: 'cover',
      maxWidth: '50%',
      borderRadius: '50%'
    },
    '& .profile-details': {
      margin: '0 0 0 125px',
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
  },
  buttonPadding: {
    padding: '0 0 0 0',
    margin: '0 0 0 0'
  },
});

class Profile extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {classes, quizResult: {userHandle, userImage, className, finishedAt}} = this.props;
    return (finishedAt === "2019-12-24T23:39:44.590Z") ? (
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.profile}>
          <div className="image-wrapper">
            <img className="profile-image" src={userImage} alt="profile"/>
          </div>
          <div className="profile-details">
            <ListItem className={classes.buttonPadding}>
              <ListItemIcon> <Person color="primary"/> </ListItemIcon>
              <Typography variant="h6" color="initial">{userHandle}</Typography>
            </ListItem>
            <ListItem className={classes.buttonPadding}>
              <ListItemIcon> <School color="primary"/> </ListItemIcon>
              <Typography variant="h6" color="initial">{className}</Typography>
            </ListItem>
            <ListItem className={classes.buttonPadding}>
              <ListItemIcon> <Web color="primary"/> </ListItemIcon>
              <Typography variant="h6" color="initial"><a
                href={"https://www.github.com/oguzhan-bolukbas"}>github.com/oguzhan-bolukbas</a></Typography>
            </ListItem>
            <ListItem className={classes.buttonPadding}>
              <ListItemIcon> <CalendarToday color="primary"/> </ListItemIcon>
              <Typography variant="h6" color="initial">Joined {dayjs(finishedAt).format('MMM YYYY')}</Typography>
            </ListItem>
          </div>
        </div>
      </Paper>
    ) : <h5></h5>;
  }
}

export default withStyles(styles)(Profile);