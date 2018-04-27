import React, { Component } from 'react';
import "./Budget.css";
import { BudgetDetailName, BudgetIncome, BudgetExpenses, BudgetIncomeChildren, BudgetExpensesChildren } from "../../components/BudgetDetail";
import { EditBtn, DeleteBtn } from "../../components/Buttons";
import API from "../../utils/API";


class Budget extends Component {
    constructor(props) {
        super(props)

        this.state = {
            budgetId: () => parseInt(this.props.location.pathname.slice(8)),
            budgetName: "",
        }
    }
    componentWillMount() {
		this.setState({ profile: {} });
		const { userProfile, getProfile } = this.props.auth;
		if (!userProfile) {
			getProfile((err, profile) => {
                this.setState({ profile: profile });
                this.getBudgetDetail();
			});
		} else {
			this.setState({ profile: userProfile });
		}
    }
    
    getUserEmail = () => {
        return this.state.profile.email;
    }

    getBudgetDetail = () => {
        API.getBudgetItems(this.state.budgetId)
            .then((res) => {
                this.setState({ income_exp: res.data });
                console.log("income_exp",this.state.income_exp);
            })
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div className="container-fluid padding-added">
                <div className="container-fluid body-bg-budget valign-wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
            data-aos-duration="1000">
                    <div className="row">
                        <div className="col s12">
                        <p><BudgetDetailName /></p>
                        </div>
                    </div>
                </div>
                <div className="row all-padding-budget">
                    <div className="col l6 m12 s12" data-aos="fade-right" data-aos-duration="2000">
                        <div className="right">
                            <EditBtn />
                        </div>
                        <BudgetIncome>
                            {/* <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                            <BudgetIncomeChildren />
                            <div className="right">
                                <DeleteBtn />
                            </div> */}
                        </BudgetIncome>
                    </div>
                    <div className="col l6 m12 s12" data-aos="fade-left" data-aos-duration="2000">
                        <div className="right">
                            <EditBtn />
                        </div>
                        <BudgetExpenses>
                            {/* <BudgetExpensesChildren />
                            <BudgetExpensesChildren />
                            <BudgetExpensesChildren />
                            <BudgetExpensesChildren />
                            <div className="right">
                                <DeleteBtn />
                            </div> */}
                        </BudgetExpenses>
                    </div>
                </div>
                <div className="container" data-aos="flip-left" data-aos-duration="500">
				<div className="row">
					<div className="col l4 s12 hide-on-med-only">
						<div className="pie-wrap pie-wrap2">
							<div className="slice1 slice-wrap"> </div>
							<div className="slice2 slice-wrap"> </div>
						</div>
					</div>
					<div className="col l4 s12 hide-on-med-only">
						<div className="pie-wrap pie-wrap2">
							<div className="slice1 slice-wrap"> </div>
							<div className="slice2 slice-wrap"> </div>
						</div>
					</div>
					<div className="col l4 s12 hide-on-small-only">
						<div className="pie-wrap pie-wrap2">
							<div className="slice1 slice-wrap"> </div>
							<div className="slice2 slice-wrap"> </div>
						</div>
					</div>
				</div>
			</div>
            </div>
        );
    }
}

export default Budget;