import React, { Component } from 'react';
import "./EditBudget.css";
import { AddIncomeForm, AddBudgetName, AddExpensesForm } from "../../components/Forms";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";


class EditBudget extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col s10 offset-s1">
                        <h1 className="center-align">Your Budget</h1>
                        <AddBudgetName />
                        <div className="center">
                            <SaveBtn />
                        </div>
                    </div>
                </div>
                <div className="add-income-section">
                    <div className="row">
                        <div className="col s10 offset-s1">
                            <h1 className="center-align budget-text">Add Income</h1>
                            <AddIncomeForm />
                            <div className="center">
                                <SaveBtn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-expense-section">
                    <div className="row">
                        <div className="col s10 offset-s1">
                            <h1 className="center-align">Add Expense</h1>
                            <AddIncomeForm />
                            <div className="center">
                                <SaveBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditBudget;