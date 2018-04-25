import React from "react";
import "./Buttons.css";

export const ViewBtn = props => (
    <a href={"/budget/" + props.id} className="waves-effect waves-light btn buttons view-button"><span className="buttons-typeface">View</span></a>
);