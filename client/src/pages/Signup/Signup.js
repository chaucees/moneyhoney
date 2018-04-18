import React, { Component } from 'react';
import "./Signup.css";
import { LoginForm, SignupNameForm, SignupPasswordForm } from "../../components/Forms";


class Signup extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="container section2-signup">
                    <div className="row">
                        <div className="col s12">
                            <h1 align="center">Sign Up</h1>
                            <p align="center"><i>Start Saving Today!</i></p>
                            <SignupNameForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;