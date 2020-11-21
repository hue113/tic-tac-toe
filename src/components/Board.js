import React, { Component } from 'react';
import './Board.css';
import Square from './Square';


class Board extends Component {
    // 03-lift-state-up: Add a constructor to the Board
    // set the Board’s initial state to contain an array of 9 nulls (corresponding to the 9 squares)
    // 05-taking-turns: set the first move to be “X” by default
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xisNext: true,
        };
    }

    // Add function handleClick
    // 05: Use boolean xIsNext to determine who goes next
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    // In 02-state, X is determined by Square’s own state
    // This is why Square ignores the value prop passed to it by the Board
    // Now, we use props again and pass down two props from Board to Square: value & onClick
    renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        // 05: change status to display which player has the next turn
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;