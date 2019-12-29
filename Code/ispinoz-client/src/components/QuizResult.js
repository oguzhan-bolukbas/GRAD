import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const styles = {
  card: {
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
};

class QuizResult extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {classes, quizResult: {userHandle, userImage, className, quizNumber, quizScore, finishedAt}} = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia image={userImage} title="Quiz Result" className={classes.image}/>
        <CardContent className={classes.content}>
          <Typography variant="h5" component={Link} to={`/kisiler/${userHandle}`} color="primary">{userHandle}</Typography>
          <Typography variant="body1" color="secondary">Quiz Numarası: {quizNumber}</Typography>
          <Typography variant="body1" color="secondary">Quiz Puanı: {quizScore}</Typography>
          <Typography variant="body1">Sınıfı: {className}</Typography>
          <Typography variant="body2" color="textSecondary">{dayjs(finishedAt).fromNow()}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(QuizResult);