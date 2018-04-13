import React, { Component } from 'react';
import "./Dashboard.css";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";
import { DashPanel, DashPanelName, DashIncome, DashExpenses } from "../../components/DashPanel";
import { ProfilePhoto, ProfileName, ProfileEmail } from "../../components/Profile";

class Dashboard extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="container section2">
                    <div className="row">
                        <div className="col s7 push-s5">
                            <span className="flow-text">
                                <ProfileName />
                                <ProfileEmail />

                            </span>

                        </div>
                        <ProfilePhoto />
                        <div className="row">
                            <div className="col sm-4 offset-s5">
                                <EditBtn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container section2">
                    <div className="row">
                        <DashPanel>
                            <div className="right">
                                <ViewBtn />
                            </div>
                            <DashPanelName />
                        </ DashPanel>
                    </div>
                    <div className="row">
                        <DashPanel>
                            <div className="right">
                                <ViewBtn />
                            </div>
                            <DashPanelName />
                        </ DashPanel>
                    </div>
                    <div className="row">
                        <AddBtnAlt />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s6 section4">
                            <h1 align="center">Income</h1>
                            <DashIncome />
                        </div>
                        <div className="col s6 section4">
                            <h1 align="center">Expenses</h1>
                            <DashExpenses />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;