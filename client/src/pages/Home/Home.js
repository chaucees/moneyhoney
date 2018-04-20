import React, { Component } from 'react';
import "./Home.css";
import Banks from "./images/banks.png";
import iphone from "./images/iphone.png";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";
import { LoginForm, SignupNameForm, SignupPasswordForm } from "../../components/Forms";

class Home extends Component {
  render() {
		const { isAuthenticated } = this.props.auth;
    
    return (
<div className="container-fluid">
    <div className="row">
        <div className="section homeheader-home valign-wrapper center-align">
            <div className=" col s12">
                <p className="header-text-home">Save For The Future</p>
                <p className="header-text-home">You Deserve</p>
                <p className="sub-header-text-home">Money Management Made Easy</p>
            </div>
        </div>
    </div>
    <div className="container section2">
        <div className="row">
            <div className="col s6" align="center">
                <i className="material-icons light-blue-text accent-2-text medium">attach_money</i>
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
    <div className="container-fluid section3-home">
        <div className="row">
            <div className="col s12 m12 l8 xl8">
                <span className="large-text">No Fees</span>
                <p>The app is totally free.</p>
                <span className="large-text">No Worries</span>
                <p>MoneyHoney accounts are FDIC insured.</p>

            </div>

            <div className="col s12 xl4 l4 hide-on-small-only hide-on-med-only">
                <img src={iphone}></img>
            </div>

        </div>
    </div>
    <div className="container-fluid section4-home">
        <div className="row">
            <span className="large-text-white">Getting Started</span>
            <p><i>It's As Easy As 1, 2, 3...</i></p>
            <a class="btn-large pretty-button">Learn More</a>
        
        </div>
        
    </div>
</div>
        
    );
  }
}

export default Home;