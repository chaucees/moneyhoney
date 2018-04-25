import React from "react";
import "./Buttons.css";

export const DeleteBtn = props => (
    <a className="waves-effect waves-light btn buttons delete-button"
        data-budget-id={props.budgetId}
        onClick={() => props.deleteBudget(props.budgetId)}
    >
        <span className="buttons-typeface">Delete</span>
    </a>
);