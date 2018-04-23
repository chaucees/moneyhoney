import React, { Component } from 'react';
import "./Budget.css";
import { BudgetDetailName, BudgetIncome, BudgetExpenses, BudgetIncomeChildren, BudgetExpensesChildren } from "../../components/BudgetDetail";
import { EditBtn, DeleteBtn } from "../../components/Buttons";


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
                            <div className="right">
                                <DeleteBtn />
                            </div>
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
                            <div className="right">
                                <DeleteBtn />
                            </div>
                        </BudgetExpenses>
                    </div>
                </div>
            </div>
        );
    }
}

export default Budget;