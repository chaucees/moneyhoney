import React, { Component } from 'react';
import "./Dashboard.css";
import { ViewBtn, AddBtnAlt, DeleteBtn, SaveBtn } from "../../components/Buttons";
import { DashPanel, DashPanelName } from "../../components/DashPanel";
import { ProfileName} from "../../components/Profile";
import { AddBudgetName } from "../../components/Forms";
import { Modal, Button } from "react-materialize";
import API from "../../utils/API";
import Graphs from "./images/graphs.png";

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			budgets: [],
			newBudgetName: ""
		}

		this.getUsersBudgets = this.getUsersBudgets.bind(this);
	}

	componentWillMount() {
		this.setState({ profile: {} });
		const { userProfile, getProfile } = this.props.auth;
		if (!userProfile) {
			getProfile((err, profile) => {
				this.setState({ profile: profile });
				this.getUsersBudgets();
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
				this.setState({ budgets: res.data })
			})
			.catch((err) => console.error(err));
	}

	deleteBudget = (budgetId) => {
		const self = this;

		API.deleteBudget(budgetId)
			.then((res) => self.getUsersBudgets())
			.catch((err) => console.error(err));
	}

	createBudget = (event) => {
		event.preventDefault();

		let userEmail = this.state.profile.email;
		let data = {
			name: this.state.newBudgetName,
			user_email: userEmail
		}

		API.createBudget(data);
	}

	handleInputChange = (event) => {
		const {name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	render() {
		const { profile, email } = this.state;
		return (

			<div className="container-fluid">
				<div className="container-fluid header-dash valign-wrapper" data-aos="fade" data-aos-duration="1000" data-aos-once="true">
					<div className="row">
						<div className="col s12">
							<p className="welcome-text">Welcome</p>
							<h1 className="profile-name white-text"><ProfileName profile={profile} /></h1>
						</div>
					</div>
				</div>
				<div className="container all-padding" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
					<div className="row">
						<div className="col s12">
							{
								this.state.budgets.map((budget, index) => (
									<div key={index} className="row">
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
								<Button floating large className='btn-floating btn-large waves-effect waves-light blue-grey darken-4' waves='light' icon='add' onClick={this.createBudget}/>
								</div>
								<div className="col s6">
									<AddBudgetName 
										value={this.state.newBudgetName}
										name="newBudgetName"
										onChange={this.handleInputChange}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			<div className="container" data-aos="flip-left" data-aos-duration="500" data-aos-once="true">
				<div className="row">
					<div className="col s12">
						<center><img src={Graphs}></img></center>
					</div>
					
					
					
					{/* <div className="col l4 s12 hide-on-med-only">
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
					</div> */}
				</div>
			</div>
		</div>
		);
	}
}
export default Dashboard;