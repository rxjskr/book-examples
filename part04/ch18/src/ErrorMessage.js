import React, { Component } from 'react';

export default class ErrorMessage extends Component {
    render() {
        if (!this.props.errorMessage) return null;

        return (
            <div className="errorMessage">
                {this.props.errorMessage}
            </div>
        );
    }
}
