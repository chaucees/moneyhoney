import React, { Component } from 'react';
import "./Budget.css";
import { DashPanel, DashPanelName } from "../../components/DashPanel";
import { BudgetDetailName, BudgetIncome, BudgetExpenses, BudgetIncomeChildren, BudgetExpensesChildren } from "../../components/BudgetDetail";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";


class Budget extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <BudgetDetailName />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s10 offset-s1">
                        <BudgetIncome>
                            <div className="right">
                                <EditBtn />
                            </div>
                            <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                        </BudgetIncome>
                    </div>
                </div>
                <div className="row">
                    <div className="col s10 offset-s1">
                        <BudgetExpenses>
                            <div className="right">
                                <EditBtn />
                            </div>
                            <BudgetExpensesChildren />
                            <BudgetExpensesChildren />
                            <BudgetExpensesChildren />
                        </BudgetExpenses>
                    </div>
                </div>
                <div className="row">
                <h1 className="center-align">Graphs here?</h1>
                </div>
            </div>
        );
    }
}

export default Budget;