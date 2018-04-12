import React from "react";
import "./Profile.css";
import Ben from "./images/ben.jpg";

export const ProfilePhoto = props => (
    <div className="col s5 pull-s7">
        <span class="flow-text">
            <img src={Ben} className="img-circle"></img>
        </span>
    </div>
);
