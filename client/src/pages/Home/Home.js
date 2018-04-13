import React, { Component } from 'react';
import "./Home.css";
import Woman from "./images/woman.png";
import Man from "./images/man.png";
import OldMan from "./images/oldman.png";
import Banks from "./images/banks.png";

// ADDED BUTTONS FOR TESTING
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";
//ADDED FORMS FOR TESTING ALSO
import { LoginForm, SignupNameForm, SignupPasswordForm } from "../../components/Forms";

class Home extends Component {
  render() {
		const { isAuthenticated } = this.props.auth;
    
    return (
<div className="container-fluid">
    <div className="row">
        <div className="section homeheader valign-wrapper center-align">
            <div className=" col s12">
                <p className="header-text">Prepare For The Future</p>
                <p className="header-text">You Deserve</p>
                <p className="sub-header-text">Money Management Made Easy</p>
            </div>
        </div>
    </div>
    <div className="container section2">
        <div className="row">
            <div className="col s6" align="center">
                <i className="material-icons light-blue-text accent-2-text medium">account_balance</i>
                <h1>What Is MoneyHoney?</h1>
                <p>MoneyHoney is a cloud-based budgeting app that allows you to track income and every day expenses and automate
                    bill payments to save for the life you deserve.</p>
            </div>
            <div className="col s6" align="center">
                <i className="material-icons light-blue-text accent-2-text medium">people_outline</i>
                <h1>Who Is It For?</h1>
                <p>MoneyHoney is for those who cringe when thinking about spreedsheets, budgets, and expenses. If you're looking
                    for an easy way to save for the future you want, sign up today! </p>
            </div>
        </div>
    </div>
    <div className="container-fluid section3">
        <div className="row">
            <h2>What Our Clients Are Saying</h2>
        </div>
        <div className="row">
            <div className="col s12 m4">
                <img src={Woman}></img>
                <p>"MoneyHoney helped me pay off my student loans in half the time!"</p>
                <p>Mia -
                    <i>Photographer</i>
                </p>
            </div>
            <div className="col s12 m4 hide-on-small-only">
                <img src={Man}></img>
                <p>"MoneyHoney automated my bill and loan payments which helped raise my credit score."</p>
                <p>Tim -
                    <i>Author</i>
                </p>
            </div>
            <div className="col s12 m4 hide-on-small-only">
                <img src={OldMan}></img>
                <p>"Thanks to MoneyHoney I was able to save more for retirement and retire 5 years early!"</p>
                <p>George -
                    <i>Marketing</i>
                </p>

            </div>

        </div>
    </div>
    <div className="container section2">
        <div className="row">
            <center>
                <h1>Getting Started</h1>
            </center>
            <center>
                <i>It's As Easy As 1, 2, 3...</i>
            </center>
        </div>
        <div className="row">
            <div className="col s12 m4" align="center">
                <p className="large-num">1.</p>
                <h1>Sign Up</h1>
                <SignupNameForm />
            </div>
            <div className="col s4 hide-on-small-only" align="center">
                <p className="large-num">2.</p>
                <h1>Link Accounts</h1>
                <p>Over 30 national banks supported!</p>
                <p>
                    <img src={Banks} className="img"></img>
                </p>
            </div>
            <div className="col s4 hide-on-small-only" align="center">
                <p className="large-num">3.</p>
                <h1>Start Saving</h1>
                <span align="left">
                    <ul>
                        <li>1. Set Your Goals.</li>
                        <li>2. Select Your Savings Plan.</li>
                        <li>3. Start Saving!</li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
</div>
          
        
    );
  }
}

export default Home;