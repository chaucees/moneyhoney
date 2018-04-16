import React from "react";
import "./Forms.css";
import { Input } from "react-materialize";
// Buttons
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";

export const AddExpensesForm = props => (
    <div className="row">
        <div className="input-field col s12">
            <input
                type="text"
                id="budget-name"
                {...props}
            />
            <label htmlFor="expense-name">Expense Name</label>
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
                name="recurring-expense"
                type="checkbox"
                id="recurring-expense"
                value="recurring-expense"
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
            <label htmlFor="frequency">How often?</label>
        </div>
        <div className="input-field col s6">
            <Input name='on' type='date' onChange={function(e, value) {}} />
            <label htmlFor="due-date">Due Date</label>
        </div>
    </div>
);