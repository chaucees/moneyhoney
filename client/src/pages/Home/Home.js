import React, { Component } from 'react';
import "./Home.css";
import Banks from "./images/banks.png";
import iphone from "./images/iphone.png";

class Home extends Component {

  render() {
		const { isAuthenticated } = this.props.auth;
    
    return (
<div className="container-fluid">
    <div className="row fade-in one">
        <div className="section homeheader-home valign-wrapper center-align">
            <div className=" col s12">
                <p className="header-text-home">Save For The Future</p>
                <p className="header-text-home">You Deserve</p>
                <p className="sub-header-text-home">Money Management Made Easy</p>
            </div>
        </div>
    </div>
    <div className="container section2">
        <div className="row fade-in two">
            <div className="col l6 m6 s12" align="center">
                <i className="material-icons light-blue-text accent-2-text medium">attach_money</i>
                <h1>What Is MoneyHoney?</h1>
                <p>MoneyHoney is a cloud-based budgeting app that allows you to track income and every day expenses and automate
                    bill payments to save for the life you deserve.</p>
            </div>
            <div className="col l6 m6 s12" align="center">
                <i className="material-icons light-blue-text accent-2-text medium">people_outline</i>
                <h1>Who Is It For?</h1>
                <p>MoneyHoney is for those who cringe when thinking about spreedsheets, budgets, and expenses. If you're looking
                    for an easy way to save for your future, sign up today! </p>
            </div>
        </div>
    </div>
    <div className="container-fluid section3-home">
        <div className="row fade-in three">
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
    <div className="container section4-home">
        <div className="row fade">
            <div className="col l4 m4 s12" align="center">
                <i className="material-icons light-blue-text accent-2-text medium">cloud_queue</i>
                <h2>Effortlessly Stay on Top of Bills</h2>
                <p>Never have a late payment again! Get alerts on upcoming bills, say goodbye to late feels, and see your income and budget in one place.</p>
            </div>
            <div className="col l4 m4 s12" align="center">
                <i className="material-icons light-blue-text accent-2-text medium">face</i>
                <h2>Personzlied For You</h2>
                <p>Create new budgets today to set you up for success tomorrow. Receive alerts for unusual account charges and get. Custom tips for reducing feeds and saving money.</p>
            </div>
            <div className="col l4 m4 s12" align="center">
                <i className="material-icons light-blue-text accent-2-text medium">wb_sunny</i>
                <h2>Free Credit Score</h2>
                <p>Find out yours for free and get tips to help improve it. Get your free credit score and learn how you can improve it now to get the things you want later.

</p>
            </div>
        </div>
    </div>
    <div className="container-fluid section5-home">
        <div className="row fade">
            <span className="large-text-white">Getting Started</span>
            <p><i>It's As Easy As 1, 2, 3...</i></p>
            <span className="btn-large pretty-button" onClick={this.props.auth.login}>Sign Up</span>
        
        </div>
        
    </div>
</div>
        
    );
  }
}

export default Home;