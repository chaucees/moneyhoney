import React, { Component } from "react";
import "./Buttons.css";

export class LogoutBtn extends Component {
    logout() {
        this.props.auth.logout();
    }

    render() {
        return (
            <a className="waves-effect waves-light btn buttons login-button"
                onClick={this.logout.bind(this)}>
                <span className="buttons-typeface">Logout</span>
            </a>
        )
    }
}
