import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';


class App extends Component {
  // 07: to track past moves (history) --> we need to move state up to App by adding constructor in App
  // This gives App full control over Board’s data, and lets it instruct Board to render previous turns from the history
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  render() {
    return (
        <div className="App">
          <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        </div>
    );
  }
}

export default App;