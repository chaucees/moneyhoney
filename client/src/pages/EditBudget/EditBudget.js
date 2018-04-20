import React, { Component } from 'react';
import "./EditBudget.css";
import { AddIncomeForm, AddBudgetName, AddExpensesForm } from "../../components/Forms";
import { AddBtn, BackBtn, EditBtn, SaveBtn } from "../../components/Buttons";
import { BudgetDetailName, BudgetIncome, BudgetExpenses, BudgetIncomeChildren, BudgetExpensesChildren } from "../../components/BudgetDetail";



class EditBudget extends Component {

    render() {
        return (
            <div className="container editbudget">
                <div className="row">
                    <div className="col s10 offset-s1">
                        <h1 className="center-align">Your Budget</h1>
                        <AddBudgetName />
                        <div className="center">
                            <AddBtn />
                        </div>
                    </div>
                </div>
                <div className="add-income-section">
                    <div className="row">
                        <div className="col s10 offset-s1">
                            <h1 className="center-align budget-text">Add Income</h1>
                            <AddIncomeForm />
                            <div className="center">
                                <AddBtn />
                            </div>
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
                            <AddExpensesForm />
                            <div className="center">
                                <AddBtn />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s10 offset-s1">
                            <BudgetExpenses>
                                <BudgetExpensesChildren />
                                <BudgetExpensesChildren />
                                <BudgetExpensesChildren />
                                <BudgetExpensesChildren />
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