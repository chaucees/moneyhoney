import React, { Component } from 'react';
import "./Signup.css";
import { LoginForm, SignupNameForm, SignupPasswordForm } from "../../components/Forms";


class Signup extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="section homeheader">
                    <div className="col s12 m8 l8">
                        <p className="header-text">Prepare For The Future</p>
                        <p className="header-text">You Deserve</p>
                        <p className="sub-header-text">Money Management Made Easy</p>
                    </div>
                </div>
                <div className="container section2">
                    <div className="row">
                        <div className="col s12">
                            <h1 align="center">Sign Up</h1>
                            <p align="center"><i>And Start Saving Today!</i></p>
                            <SignupNameForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;