import React from "react";
import "./Forms.css";
import { Input } from "react-materialize";

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
            <div className="date-picker">
                <Input name='on' type='date' onChange={function (e, value) { }} />
                <label htmlFor="due-date">Due Date</label>
            </div>
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