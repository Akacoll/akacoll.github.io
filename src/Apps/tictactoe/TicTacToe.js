import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'shared/Button'
import './TicTacToe.css'

function Square(props) {
  return (
    <button className="square"
      onClick={props.onClick}
      style={
        { backgroundColor: props.color }
      }>
      {props.value}
    </button>
  );
}

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        color={this.props.coloredSquares.includes(i)?"green":""}
      />
    );
  }

  render() {
    return (
      <div>
        {[0, 1, 2].map((outerValue) => 
            <div className="board-row" key={outerValue}>
              {
                [0, 1, 2].map((value) => 
                  this.renderSquare(outerValue * 3 + value)
                )
              }
            </div>
          )}
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "😇" : "😈";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      history: this.state.history.slice(0, step + 1),
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      let variant = (move === this.state.stepNumber) ? "info" : "outline-info";
      return (
        <li key={move}>
          <Button onClick={() => this.jumpTo(move)} text={desc} variant={variant} size="sm"></Button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner.who; // O or X
      console.log(winner.positions);

    } else {
      status = "Next player: " + (this.state.xIsNext ? "😇" : "😈");
    }

    return (
      <Container>
        <Row>
          <Col>
            <h3>Tic Tac Toe</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="game d-flex justify-content-center">
              <div className="game-board">
                <Board
                  coloredSquares={winner?winner.positions:[]}
                  squares={current.squares}
                  onClick={i => this.handleClick(i)}
                />
              </div>
              <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
              </div>
            </div>
          </Col>
        </Row>


      </Container>

    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { who: squares[a], positions: lines[i] };
    }
  }
  return null;
}

export default Game;