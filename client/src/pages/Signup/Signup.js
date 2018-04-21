import React, { Component } from 'react';
import "./Signup.css";
import { SignupNameForm } from "../../components/Forms";


class Signup extends Component {

    render() {
        return (
            <div className="container-fluid body-bg-sign-up">
                <div class="row no-padding">
                            <div className="col l6 m8 s12 offset-l3 offset-m2 section2-signup">
                                <center>
                                    <h1>Sign Up</h1>
                                    <p>
                                        <i>and start saving today!</i>
                                    </p>
                                </center>
                                <SignupNameForm />
                                <p></p>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Signup;