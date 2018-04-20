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
                name="incomeName"
                onChange={props.handleInputChange}
            />
            <label htmlFor="income-name">Income Name</label>
        </div>
        <div className="input-field col s6">
            <input
                type="text"
                id="amount-income"
                name="incomeAmount"
                onChange={props.handleInputChange}
            />
            <label htmlFor="amount-income">Amount</label>
        </div>
        <div className="input-field col s6">
            <div className="date-picker">
                <Input name='incomeDate' 
                       type='date' 
                    //    onChange={function (e, value) { }} 
                       onChange={props.handleInputChange}
                />
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