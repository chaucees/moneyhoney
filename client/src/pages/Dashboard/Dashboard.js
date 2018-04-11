import React, { Component } from 'react';
import "./Dashboard.css";
import Ben from "./images/ben.jpg";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";



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
                    <div className="row row-item">
                        <div className="col s10 center-content">
                            Rent / Utilities
                        </div>
                        <div className="col s2 right">
                            <div align="right"><EditBtn /></div>
                        </div>
                    </div>
                    <div className="row row-item">
                        <div className="col s10 center-content">
                            Studen Loans
                        </div>
                        <div className="col s2 right">
                            <div align="right"><EditBtn /></div>
                        </div>
                    </div>
                    <div className="row row-item">
                        <div className="col s10 center-content">
                            Misc
                        </div>
                        <div className="col s2 right">
                            <div align="right"><EditBtn /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <AddBtn /> Add Budget
                        </div>
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