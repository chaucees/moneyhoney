import React, { Component } from 'react';
import "./Budget.css";
import { BudgetDetailName, BudgetIncome, BudgetExpenses, BudgetIncomeChildren, BudgetExpensesChildren } from "../../components/BudgetDetail";
import { EditBtn } from "../../components/Buttons";


class Budget extends Component {

    render() {
        return (
            <div className="container-fluid padding-added">
                <div className="container-fluid body-bg-budget valign-wrapper">
                    <div className="row">
                        <div className="col s12">
                            <p className="white-text"><BudgetDetailName /></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s10 offset-s1">
                        <div className="right">
                            <EditBtn />
                        </div>
                        <BudgetIncome>
                            <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                        </BudgetIncome>
                    </div>
                </div>
                <div className="row no-padding">
                    <div className="col s10 offset-s1">
                        <div className="right">
                            <EditBtn />
                        </div>
                        <BudgetExpenses>
                            <BudgetExpensesChildren />
                            <BudgetExpensesChildren />
                            <BudgetExpensesChildren />
                            <BudgetExpensesChildren />
                        </BudgetExpenses>
                    </div>
                </div>
            </div>
        );
    }
}

export default Budget;