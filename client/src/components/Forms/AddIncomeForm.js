import React, { Component } from "react";
import "./Forms.css";
import { Input } from "react-materialize";
import { AddBtn } from "../Buttons";

export class AddIncomeForm extends Component {
    constructor(props) {
        super(props)

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.resetInputForm = this.resetInputForm.bind(this);
    }

    handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        this.props.sendCheckboxValue(name, checked);
    }

    handleAddIncomeFormSubmit = (event) => {
		event.preventDefault();

		const data = {
			incomeName     : this.props.incomeName,
			incomeAmount   : this.props.incomeAmount,
			incomeDate     : this.props.incomeDate,
			incomeWillRecur: this.props.incomeWillRecur
		}

		if (this.props.incomeWillRecur) {
			data.incomeFrequency = this.props.incomeFrequency;
		}

		console.log(data);

		this.resetInputForm();
		
		/* route to PUT data */
	}

	resetInputForm = () => {
		// How do I get the form to visually reset?
        this.refs.incomeName.value   = "";
        this.refs.incomeAmount.value = null;
        // Can't figure out how to reset date in form
        // this.refs.incomeDate.value      = Date();
        this.refs.incomeWillRecur.checked = false;
        this.refs.incomeFrequency.value   = null;
	}

    render() {
        return (
        <div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        type="text"
                        id="income-name"
                        name="incomeName"
                        ref="incomeName"
                        onChange={this.props.handleInputChange}
                    />
                    <label htmlFor="income-name">Income Name</label>
                </div>
                <div className="input-field col s6">
                    <input
                        type="text"
                        id="amount-income"
                        name="incomeAmount"
                        ref="incomeAmount"
                        onChange={this.props.handleInputChange}
                    />
                    <label htmlFor="amount-income">Amount</label>
                </div>
                <div className="input-field col s6">
                    <div className="date-picker">
                        <Input name='incomeDate' 
                            ref="incomeDate"
                            type='date' 
                            onChange={this.props.handleInputChange}
                        />
                        <label htmlFor="incomeDate">Due Date</label>
                    </div>
                </div>
                <div className="input-field col s6">
                    <Input
                        name="incomeWillRecur"
                        ref="incomeWillRecur"
                        type="checkbox"
                        id="incomeWillRecur"
                        label="Is it recurring?"
                        checked={false}
                        onChange={this.handleCheckboxChange}
                    />
                </div>
                <div className="input-field col s6">
                    <input
                        type="text"
                        id="frequency-income"
                        name="incomeFrequency"
                        ref="incomeFrequency"
                        onChange={this.props.handleInputChange}
                    />
                    <label htmlFor="frequency-income">How often?</label>
                </div>
            </div>
            <div className="center">
                <AddBtn
                    onClickFunction={this.handleAddIncomeFormSubmit}
                />
            </div>
        </div>
        )
    } 
}

// name
// amount
// Date
// recurring?
// how often?