import React, { Component } from 'react';
import "./Dashboard.css";
import { LoginBtn, AddBtn, BackBtn, EditBtn, SaveBtn, SubmitBtn, ViewBtn, DeleteBtn, AddBtnAlt } from "../../components/Buttons";
import { DashPanel, DashPanelName, DashIncome, DashExpenses } from "../../components/DashPanel";
import { ProfilePhoto, ProfileName, ProfileEmail } from "../../components/Profile";

class Dashboard extends Component {
	state = {
		profile: {}
	}

	componentWillMount() {
		this.setState({ profile: {} });
		const { userProfile, getProfile } = this.props.auth;
		if (!userProfile) {
			getProfile((err, profile) => {
				this.setState({ profile });
			});
		} else {
			this.setState({ profile: userProfile });
		}
	}

	render() {
		const { profile } = this.state;

		return (
			<div className="container-fluid">
				<div className="container section2">
					<div className="row">
						<div className="col s7 push-s5">
							<span className="flow-text">
								<ProfileName profile={profile} /> {/*
								<h1>{profile.name}</h1> */}
								<ProfileEmail profile={profile} />
								<EditBtn />
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
							</ DashPanel>
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
			</div>
		);
	}
}

export default Dashboard;