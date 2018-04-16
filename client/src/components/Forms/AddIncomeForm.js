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
                id="budget-name"
                {...props}
            />
            <label htmlFor="income-name">Income Name</label>
        </div>
        <div className="input-field col s6">
            <input
                type="text"
                id="amount"
                {...props}
            />
            <label htmlFor="amount">Amount</label>
        </div>
        <div className="input-field col s6">
            <input
                type="text"
                id="date"
                {...props}
            />
            <label htmlFor="date">Date</label>
        </div>
        <div className="input-field col s6">
            <Input
                name="recurring"
                type="checkbox"
                id="recurring"
                value="recurring"
                label="Is it recurring?"
                {...props}
            />
        </div>
        <div className="input-field col s6">
            <input
                type="text"
                id="frequency"
                {...props}
            />
            {/* <Input name='on' type='date' onChange={function(e, value) {}} /> */}
            <label htmlFor="last-name">How often?</label>
        </div>
    </div>
);

// name
// amount
// Date
// recurring?
// how often?