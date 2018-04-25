import React, { Component } from 'react';
import "./Dashboard.css";
import { ViewBtn, AddBtnAlt, DeleteBtn, SaveBtn } from "../../components/Buttons";
import { DashPanel, DashPanelName } from "../../components/DashPanel";
import { ProfileName } from "../../components/Profile";
import { AddBudgetName } from "../../components/Forms";
import { Modal, Button } from "react-materialize";
import API from "../../utils/API";

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			budgets: [
				{
					name: "Budget 1",
					user_email: "boggsjp@gmail.com",
					id: 1
				},
				{
					name: "Budget 2",
					user_email: "boggsjp@gmail.com",
					id: 2
				},
				{
					name: "Budget 3",
					user_email: "boggsjp@gmail.com",
					id: 3
				},
			]
		}

		this.getUsersBudgets = this.getUsersBudgets.bind(this);
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
	}

	getUsersBudgets = () => {
		let userEmail = this.state.profile.email;

		// use userEmail to find Budgets belonging to that user
		API.findBudgets(userEmail)
			.then((res) => {
				this.setState({ budgets: res.body })
			})
			.catch((err) => console.error(err));
	}

	deleteBudget = (budgetId) => {
		const self = this;

		API.deleteBudget(budgetId)
			.then((res) => self.getUsersBudgets())
			.catch((err) => console.error(err));
	}

	render() {
		const { profile, email } = this.state;
		return (
			<div className="container-fluid">
				<div className="container-fluid header-dash valign-wrapper">
					<div className="row">
						<div className="col s12">
							<p className="welcome-text">Welcome</p>
						</div>
					</div>
				</div>

				<div className="container all-padding">
					<div className="row">
						<div className="col s12">
							<center>
								<h2><ProfileName profile={profile} /></h2>
							</center>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							{
								this.state.budgets.map((budget, index) => (
									<div className="row">
										<DashPanel>
											<div className="right">
												<ViewBtn budgetId={budget.id} />
											</div>
											<div className="right">
												<DeleteBtn budgetId={budget.id} deleteBudget={this.deleteBudget} />
											</div>
											<DashPanelName>{budget.name}</DashPanelName>
										</DashPanel>
									</div>
								))
							}
							<div className="row">
							<div className="col s1">
								<Modal
									header='Budget Name'
									actions={<SaveBtn modal="close" />}
									trigger={<Button floating large className='btn-floating btn-large waves-effect waves-light blue-grey darken-4' waves='light' icon='add' />}>
									<AddBudgetName/>
								</Modal>
								</div>
								<div className="col s4">
									<AddBtnAlt />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Dashboard;