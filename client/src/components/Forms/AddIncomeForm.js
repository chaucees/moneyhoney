import React from "react";
import "./Forms.css";
import { Input } from "react-materialize";
// Buttons
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";

export const AddIncomeForm = props => (
    <div className="row">
        <div className="input-field col s12">
            <input
                type="text"
                id="income-name"
                {...props}
            />
            <label htmlFor="income-name">Income Name</label>
        </div>
        <div className="input-field col s6">
            <input
                type="text"
                id="amount-income"
                {...props}
            />
            <label htmlFor="amount-income">Amount</label>
        </div>
        <div className="input-field col s6">
            <input
                type="text"
                id="date-income"
                {...props}
            />
            <label htmlFor="date-income">Date</label>
        </div>
        <div className="input-field col s6">
            <Input
                name="recurring-income"
                type="checkbox"
                id="recurring-income"
                value="recurring-income"
                label="Is it recurring?"
                {...props}
            />
        </div>
        <div className="input-field col s6">
            <input
                type="text"
                id="frequency-income"
                {...props}
            />
            <label htmlFor="frequency-income">How often?</label>
        </div>
    </div>
);

// name
// amount
// Date
// recurring?
// how often?