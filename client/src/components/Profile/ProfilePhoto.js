import React, { Component } from "react";
import "./Profile.css";
// import Ben from "./images/ben.jpg";

export class ProfilePhoto extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="col s5 pull-s7">
                <span className="flow-text">
                    <img src={this.props.profile.picture} className="img-circle" />
                </span>
            </div>
        )
    }
}