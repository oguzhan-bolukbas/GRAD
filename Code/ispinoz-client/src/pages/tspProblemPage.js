import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({

  card: {
    maxWidth: 60,
  },
  row: {
    display: "flex",
    marginTop: "5px",
 marginBottom:"5px",
    marginRight: "10px"
  },
  rectangle: {
    width: 35 ,
    height: 35,
    backgroundColor: '#EB9694'
  }
});


function Square(props) {
  return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>

  );
}

class tspProblemPage extends React.Component {

  renderSquare(i) {

    return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    );
  }

  render() {
    const classes = useStyles();
    return (
        <div>
          <div className={classes.row}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
          </div>



        </div>

    );
  }
}
export default tspProblemPage;
