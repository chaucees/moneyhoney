import React, { Component } from "react";
import "./Forms.css";
import { Input } from "react-materialize";
import { AddBtn } from "../Buttons";

export class AddExpensesForm extends Component {
    constructor(props) {
        super(props)

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.resetInputForm = this.resetInputForm.bind(this)
    }

    handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        this.props.sendCheckboxValue(name, checked);
    }

    handleAddExpenseFormSubmit = (event) => {
		event.preventDefault();

		const data = {
			expenseName     : this.props.expenseName,
			expenseAmount   : this.props.expenseAmount,
			expenseDate     : this.props.expenseDate,
			expenseWillRecur: this.props.expenseWillRecur
		}

		if (this.props.expenseWillRecur) {
			data.expenseFrequency = this.props.expenseFrequency;
		}

		console.log(data);

		this.resetInputForm();
		
		/* route to PUT data */
	}

	resetInputForm = () => {
		// How do I get the form to visually reset?
        this.refs.expenseName.value   = "";
        this.refs.expenseAmount.value = null;
        // Can't figure out how to reset date in form
        // this.refs.expenseDate.value      = Date();
        this.refs.expenseWillRecur.checked = false;
        this.refs.expenseFrequency.value   = null;
	}

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="text"
                            id="expense-name"
                            name="expenseName"
                            ref="expenseName"
                            onChange={this.props.handleInputChange}
                        />
                        <label htmlFor="expense-name">Expense Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            type="text"
                            id="amount-expense"
                            name="expenseAmount"
                            ref="expenseAmount"
                            onChange={this.props.handleInputChange}
                        />
                        <label htmlFor="amount-expense">Amount</label>
                    </div>
                    <div className="input-field col s6">
                        <div className="date-picker">
                            <Input name='expenseDate' 
                                ref="expenseDate"
                                type='date'
                                onChange={this.props.handleInputChange}
                            />
                            <label htmlFor="expenseDate">Due Date</label>
                        </div>
                    </div>
                    <div className="input-field col s6">
                        <Input
                            name="expenseWillRecur"
                            ref="expenseWillRecur"
                            type="checkbox"
                            id="expenseWillRecur"
                            label="Is it recurring?"
                            checked={false}
                            onChange={this.handleCheckboxChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            type="text"
                            id="frequency-expense"
                            name="expenseFrequency"
                            ref="expenseFrequency"
                            onChange={this.props.handleInputChange}
                        />
                        <label htmlFor="frequency-expense">How often?</label>
                    </div>
                </div>
                <div className="center">
                    <AddBtn
                        onClickFunction={this.handleAddExpenseFormSubmit} 
                    />
                </div>
            </div>
        )
    }
}