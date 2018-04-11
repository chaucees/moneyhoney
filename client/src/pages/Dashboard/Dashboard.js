import React, { Component } from 'react';
import "./Dashboard.css";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";
import { DashPanel, DashPanelName } from "../../components/DashPanel";
import { ProfilePhoto, ProfileName, ProfileEmail } from "../../components/Profile";

class Dashboard extends Component {

    render() {
        return (
            <div className="container-fluid">
                {/* <div className="section homeheader">
                    <div className="col s12 m8 l8">
                        <p className="header-text">Prepare For The Future</p>
                        <p className="header-text">You Deserve</p>
                        <p className="sub-header-text">Money Management Made Easy</p>
                    </div>
                </div> */}
                <div className="container section2">
                    <div className="row">
                        <div className="col s7 push-s5">
                            <span class="flow-text">
                                <ProfileName />
                                <ProfileEmail />
                                <EditBtn />
                            </span>
                        </div>
                        <ProfilePhoto />
                    </div>
                </div>
                <div className="container section2">
                    <div className="row">
                        <DashPanel>
                            <div className="right">
                                <ViewBtn/>
                            </div>
                            <DashPanelName />
                        </ DashPanel>
                    </div>
                    <div className="row">
                        <DashPanel>
                            <div className="right">
                                <ViewBtn/>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius rem non mollitia nostrum aperiam velit magni nisi numquam optio aliquam officiis veniam, explicabo obcaecati, nobis consequuntur voluptatem beatae. Est.
                        </div>
                        <div className="col s6 section4">
                            <h1 align="center">Expenses</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius rem non mollitia nostrum aperiam velit magni nisi numquam optio aliquam officiis veniam, explicabo obcaecati, nobis consequuntur voluptatem beatae. Est.
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}

export default Dashboard;