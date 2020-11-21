import React, { Component } from 'react';
import './Square.css';

// 04: change the Square to be a function component
// Function components = Components that only have 1 render() and don't have their own state (no constructor) 
// It takes (props) as input and returns what should be rendered
// must change this.props --> props
// Why using Function components, not Class? --> because it's less tedious

function Square (props) {
    return (
        // this.props.value --> props.value
        // this.props.onClick --> props.onClick
        <button className="square" onClick={ () => props.onClick() }>
            {props.value}
        </button>
    );
}

export default Square;