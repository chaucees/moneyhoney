import React, { Component } from "react";
import "./Buttons.css";

export class LoginBtn extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    return (
      <a className="waves-effect waves-light btn buttons login-button"
         onClick={this.login.bind(this)}>
        <span className="buttons-typeface login-button-text">Login</span>
      </a>
    )
  }
}
