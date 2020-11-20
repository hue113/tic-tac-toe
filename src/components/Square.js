import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            // learn to pass a prop from a parent Board component to a child Square component
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

export default Square;