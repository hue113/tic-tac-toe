import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
    //03-lift-state-up: Delete the constructor from Square

    render() {
        return (
            // 01-props: learn to pass a prop from a parent Board component to a child Square component
            // 02-state: change this.props.value --> this.state.value
            // That means: Square maintains its state, Board only render <Square />; that's why we don't need to use props.value 
            // 03-lift-state-up: Board pass 2 props to Square: value & onClick
            // That's why we're back to use this.props.value & this.props.onClick to communicate with Board
            // And we can Delete the constructor from Square
            <button className="square" onClick={ () => this.props.onClick() }>
                {this.props.value}
            </button>
        );
    }
}

export default Square;