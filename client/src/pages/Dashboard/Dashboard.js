import React, { Component } from 'react';
import "./Dashboard.css";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";
import { DashPanel, DashPanelName, DashIncome, DashExpenses } from "../../components/DashPanel";
import { ProfilePhoto, ProfileName, ProfileEmail } from "../../components/Profile";
import { BudgetDetailName, BudgetIncome, BudgetExpenses, BudgetIncomeChildren, BudgetExpensesChildren } from "../../components/BudgetDetail";


class Dashboard extends Component {
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
	}

	render() {
		const { profile, email} = this.state;

		return (
			<div className="container-fluid">
				<div className="container section2">
					<div className="row">
						<div className="col s7 push-s5">
							<span className="flow-text">
                <i>Welcome</i>
								<ProfileName profile={profile} /> {/*
								<h1>{profile.name}</h1> */}
								<ProfileName profile={profile} />
								<ProfileEmail profile={profile} />
							</span>
						</div>
						<ProfilePhoto profile={profile} />
					</div>
				</div>
				<div className="container section2">
					<div className="row">
						<DashPanel>
							<div className="right">
								<ViewBtn />
							</div>
							<DashPanelName />
						</DashPanel>
					</div>
					<div className="row">
						<DashPanel>
							<div className="right">
								<ViewBtn />
							</div>
							<DashPanelName />
							</ DashPanel>
					</div>
					<div className="row">
						<AddBtnAlt />
					</div>
				</div>			
					<div className="container-fluid">
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
					</div>
				);
			}
}
		
	
export default Dashboard;