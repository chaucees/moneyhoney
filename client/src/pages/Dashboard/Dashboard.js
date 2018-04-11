import React, { Component } from 'react';
import "./Dashboard.css";
import Ben from "./images/ben.jpg";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";
import DashPanel from "../../components/DashPanel";


class Dashboard extends Component {

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
                        <div className="col s7 push-s5">
                            <span class="flow-text">
                                <h1>Ben Wyatt</h1>
                                <p>benjiwyatt@icetown.com</p>
                                <EditBtn />
                            </span>
                        </div>
                        <div className="col s5 pull-s7">
                            <span class="flow-text">                            
                                <img src={Ben} className="img-circle"></img>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container section2">
                    <div className="row">
                        <div className="col s12 row-item">
                            <AddBtn /> Add Budget
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s10 row-item">
                            Student Loans
                        </div>
                        <div className="col s2 row-item right">
                            <AddBtn />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 row-item">
                            Student Loans
                        </div>
                    </div>
                    <DashPanel />
                </div>
            </div>        
        );
    }
}

export default Dashboard;