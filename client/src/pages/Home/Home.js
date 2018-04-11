import React, { Component } from 'react';
import "./Home.css";

class Home extends Component {

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
                <div className="section">
                    <div className="row">
                        <div className="col s6" align="center">
                            <i className="material-icons light-blue-text accent-2-text medium">account_balance</i>
                            <h1>What Is It?</h1>
                            <p>MoneyHoney is a cloud-based budgeting app that allows users to track input and expenses in order to save
                    for the life they deserve.</p>
                        </div>
                        <div className="col s6" align="center">
                            <i className="material-icons light-blue-text accent-2-text medium">people_outline</i>
                            <h1>Who Is It For?</h1>
                            MoneyHoney is for those who cringe when thinking about spreadsheets, account balances, and budgets. If you don’t consider
                            yourself a “numbers person” but want to stop living paycheck to paycheck, save for a trip or a down payment,
                            then sign up today to save without the stress!
            </div>
                    </div>
                </div>
                <div className="section">
                    <div className="row">
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;