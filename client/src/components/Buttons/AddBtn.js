import React from "react";
import "./Buttons.css";

export const AddBtn = props => (
    <a className="waves-effect waves-light btn buttons"
       onClick={props.onClickFunction}
    >
        <span className="buttons-typeface">Add</span>
    </a>
);

