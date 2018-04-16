import React from "react";
import "./Forms.css";

export const AddBudgetName = props => (
    <div className="row">
        <div className="input-field col s12">
            <input
                type="text"
                id="budget-name"
                {...props}
            />
            <label htmlFor="first-name">Budget Name</label>
        </div>
    </div>
);