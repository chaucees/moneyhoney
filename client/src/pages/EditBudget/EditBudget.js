/* REQUIRED PROPS
 * auth
 * budgetId
 */

import React, { Component } from 'react';
import "./EditBudget.css";
import { AddIncomeForm, AddBudgetName, AddExpensesForm } from "../../components/Forms";
import { AddBtn, BackBtn, SaveBtn } from "../../components/Buttons";
import { BudgetIncome, BudgetExpenses, BudgetIncomeChildren, BudgetExpensesChildren } from "../../components/BudgetDetail";

class EditBudget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profile         : {},       // From Auth0
			userId          : "",       // API call from Users table
			budgetId        : "",       // Param in route /editbudget/:id?
			budgetName      : "",       // API call from Budgets table
			incomeName      : "",       // user input from form	| string
			incomeAmount    : 0,        // user input from form	| number
			incomeDate      : null,   	// user input from form	| Date
																	// format: e.g., "4 April, 2018"
			incomeWillRecur : false,    // user input from form	| boolean
			incomeFrequency : 0,        // user input from form | number
			expenseName     : "",       // user input from form | string
			expenseAmount   : 0,        // user input from form | number
			expenseDate     : Date(),   // user input from form | Date
																	// format: e.g., "4 April, 2018"
			expenseWillRecur: false,    // user input from form | boolean
			expenseFrequency: 0         // user input from form | number
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.sendCheckboxValue = this.sendCheckboxValue.bind(this);
	}

	componentWillMount() {
		this.setState({ profile: {} });
		const { userProfile, getProfile } = this.props.auth;
		if (!userProfile) {
			getProfile((err, profile) => {
				this.setState({ profile: profile });
			});
		} else {
			this.setState({ profile: userProfile });
		}

		// PSEUDOCODE for setting this.state.userId
		// let userId = this.getUserId(this.props.profile.email);
		// this.setState({ userId: userId });

		// PSEUDOCODE for setting this.state.budgetName
		// let budgetName = this.getBudgetName(this.props.budgetId);
		// this.setState({ budgetName: budgetName });
	}

	/* FUNCTION getUserId()
	 * Does GET with user email and receives match with DB user ID
	 */

	/* FUNCTION getBudgetName()
	 * Does GET with budgetId to get budget_name from budgets table
	 */

	handleInputChange = (event) => {
    // Update appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
		});
		console.log("name",name,"value",value);
	};

	sendCheckboxValue = (name, checked) => {
		console.log(name,checked);
		this.setState({
			[name]: checked
		});
	};
	
	handleBudgetNameFormSubmit = (event) => {
		event.preventDefault();
		console.log("Budget Name submitted");
		// route to PUT budget name on the budget w/ _id matching budgetId
	};

	render() {
		return (
			<div className="container editbudget" data-aos="fade" data-aos-easing="ease-in-back"
            data-aos-duration="1000" data-aos-once="true">
				<div className="row">
					<div className="col s10 offset-s1">
						<h1 className="center-align">Your Budget</h1>
						<AddBudgetName 
							name="budgetName"
							value={this.state.budgetName}
							onChange={this.handleInputChange}
						/>
						<div className="center">
							<AddBtn 
								onClickFunction={this.handleBudgetNameFormSubmit} 
							/>
						</div>
					</div>
				</div>
				<div className="add-income-section">
					<div className="row">
						<div className="col s10 offset-s1">
							<h1 className="center-align budget-text">Add Income</h1>
							<AddIncomeForm 
								incomeName={this.state.incomeName}
								incomeAmount={this.state.incomeAmount}
								incomeDate={this.state.incomeDate}
								incomeWillRecur={this.state.incomeWillRecur}
								incomeFrequency={this.state.incomeFrequency}
								handleInputChange={this.handleInputChange}
								sendCheckboxValue={this.sendCheckboxValue}
							/>
						</div>
							<div className="row">
								<div className="col s10 offset-s1">
									<BudgetIncome>
										<BudgetIncomeChildren />
										<BudgetIncomeChildren />
										<BudgetIncomeChildren />
										<BudgetIncomeChildren />
									</BudgetIncome>
								</div>
							</div>
					</div>
				</div>
				<div className="add-expense-section">
					<div className="row">
						<div className="col s10 offset-s1">
							<h1 className="center-align">Add Expense</h1>
							<AddExpensesForm
								expenseName={this.state.expenseName}
								expenseAmount={this.state.expenseAmount}
								expenseDate={this.state.expenseDate}
								expenseWillRecur={this.state.expenseWillRecur}
								expenseFrequency={this.state.expenseFrequency}
								handleInputChange={this.handleInputChange}
								sendCheckboxValue={this.sendCheckboxValue}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col s10 offset-s1">
							<BudgetExpenses>
								<BudgetExpensesChildren />
								<BudgetExpensesChildren />
								<BudgetExpensesChildren />
								<BudgetIncomeChildren />
							</BudgetExpenses>
						</div>
					</div>
				</div>
				<div className="center">
					<SaveBtn />
				</div>
			</div>
		);
	}
}

export default EditBudget;
