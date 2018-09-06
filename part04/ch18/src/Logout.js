import React, { Component } from 'react';

export default class Logout extends Component {
    constructor (props) {
        super(props);

        this.logout = event => {
            const { actions } = this.props;
            actions.resetAuth();
        };
    }

    render() {
        if (!this.props.auth) return null;

        return (
            <div className="logout">
                <form>
                    <div>{this.props.auth.username} 님 안녕하세요!</div>
                    <br />
                    <button type="button" onClick={this.logout}>로그아웃</button>
                </form>
            </div>
        );
    }
}
