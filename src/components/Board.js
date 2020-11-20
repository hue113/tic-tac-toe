import React, { Component } from 'react';
import './Board.css';
import Square from './Square';


class Board extends Component {
    // Add a constructor to the Board
    // set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
    }

    // In 02-state, X is determined by Square’s own state
    // This is why Square ignores the value prop passed to it by the Board
    // Now, we change value={i} to value={this.state.squares[i]}
    renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: X';
        
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