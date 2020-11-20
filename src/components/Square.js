import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    render() {
        return (
            // learn to pass a prop from a parent Board component to a child Square component
            // change this.props.value --> this.state.value
            <button className="square" onClick={ () => this.setState({value: 'X'}) }>
                {this.state.value}
            </button>
        );
    }
}

export default Square;