import React, { Component } from 'react';
import "./Budget.css";
import { DashPanel, DashPanelName } from "../../components/DashPanel";
import { BudgetDetailName, BudgetIncome, BudgetExpenses, BudgetIncomeChildren } from "../../components/BudgetDetail";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";


class Budget extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <BudgetDetailName />
                            <p align="center"><i>And Start Saving Today!</i></p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae molestiae similique error sit quo dicta vitae eos, ad doloribus alias. Natus accusamus rerum aut eaque excepturi quibusdam quidem, laborum, nisi neque iste numquam dolorem quae distinctio. Est, quis at, doloribus obcaecati autem adipisci vero a fuga recusandae, sunt laboriosam beatae?</p>
                        </div>
                    </div>
                </div>
                <div className="container section2">
                    <div className="row">
                        <DashPanel>
                            <DashPanelName />
                        </ DashPanel>
                    </div>
                </div>
                    <div className="row">
                    <div className="col s10 offset-s1">
                        <BudgetIncome>
                        <div className="right">
                                <EditBtn/>
                            </div>
                            <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                        </BudgetIncome>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Budget;