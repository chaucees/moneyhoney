import React, { Component } from 'react';
import "./Signup.css";
import { SignupNameForm } from "../../components/Forms";


class Signup extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row body-bg-sign-up valign-wrapper">
                    <div className="col s12">
                    <center>
                    <h1>Sign Up</h1>
                    <p><i>Start Saving Today!</i></p>
                    </center>
                    </div>
                </div>
                <div class="row">
                    <div className="container section2-signup">
                        <div className="row">
                            <div className="col s12">
                            <center><h1>Step One.</h1></center>
                                <SignupNameForm />
                            </div>
                        </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Signup;