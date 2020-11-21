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
            // 01-props: learn to pass a prop from a parent Board component to a child Square component
            // 02-state: change this.props.value --> this.state.value
            // That means: Square maintains its state, Board only render <Square />; that's why we don't need to use props.value 
            <button className="square" onClick={ () => this.setState({value: 'X'}) }>
                {this.state.value}
            </button>
        );
    }
}

export default Square;