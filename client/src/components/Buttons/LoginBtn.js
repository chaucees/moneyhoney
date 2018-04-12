import React from "react";
import "./Buttons.css";
import { Modal } from "react-materialize"
import { LoginForm } from "../Forms";
import { SubmitBtn } from "../Buttons";

export const LoginBtn = props => (
    <Modal
        trigger={<a className="waves-effect waves-light btn buttons login-button"><span className="buttons-typeface">Login</span></a>
        }>
        <h1 className="center-align">Login</h1>
        <LoginForm />
        <div className="center">
        <SubmitBtn />
        </div>
    </Modal>
    // <a className="waves-effect waves-light btn buttons login-button"><span className="buttons-typeface">Login</span></a>
);