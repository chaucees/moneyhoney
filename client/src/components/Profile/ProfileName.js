import React from "react";
import "./Profile.css";

export const ProfileName = props => (
    // <h1>Ben Wyatt</h1>
    <h1>{props.profile.name}</h1>
);