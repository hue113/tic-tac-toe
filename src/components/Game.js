import React, { Component } from 'react';
import './Game.css';
import Board from './Board';

class Game extends Component {
  // 07: to track past moves (history) --> we need to move state up to App by adding constructor in App
  // This gives App full control over Board’s data, and lets it instruct Board to render previous turns from the history
  // 08: history is an array that store all square objects. Each square object is one move
  // 09: add stepNumber to Game's state to indicate which step we’re currently viewing
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  // 09: update setState for stepNumber
  // 09: update const history = this.state.history --> this.state.history.slice(0, this.state.stepNumber + 1);
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {       
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{      // use concat(), not push() --> because concat doesn’t mutate the original array
        squares: squares
      }]),
      stepNumber: history.length,     // 09: setState for setNumber also to reflect the move displayed to the user
      xIsNext: !this.state.xIsNext
    });
  }

  // 09: Add jumpTo() to update that stepNumber
  // 09: Set xIsNext=true if new stepNumber is even number
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,          // X play in step 0,2,4,,,, (even)
    });
  }

  // 09: modify render() to render CURRENTLY SELECTED move, not the LAST move
  // const current = history[history.length - 1] --> history[this.state.stepNumber];
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-title"> Tic Tac Toe</div>
            <div className="game-board">
              <Board 
                squares={current.squares}
                onClick={(i) => this.handleClick(i)} 
              />
            </div>
            <div className="game-info">
              <span>{status}</span>
              <ol>{moves}</ol>
            </div>
        </div>
    );
  }

}

// helper function
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];      // X or O
    }
  }
  return null;
}

export default Game;