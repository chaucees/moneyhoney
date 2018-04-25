import React, { Component } from 'react';
import "./Dashboard.css";
import { ViewBtn, AddBtnAlt, DeleteBtn } from "../../components/Buttons";
import { DashPanel, DashPanelName } from "../../components/DashPanel";
import { ProfileName } from "../../components/Profile";

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
							<center><h2><ProfileName profile={profile} /></h2></center>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<div className="row">
								<DashPanel>
									<div className="right">
										<ViewBtn />
									</div>
									<div className="right">
										<DeleteBtn />
									</div>
									<DashPanelName />
								</DashPanel>
							</div>
							<div className="row">
								<DashPanel>
									<div className="right">
										<ViewBtn />
									</div>
									<div className="right">
										<DeleteBtn />
									</div>
									<DashPanelName />
								</ DashPanel>
							</div>
							<div className="row">
								<AddBtnAlt />
							</div>
						</div>
					</div>
				</div>
			<div className="container">
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
export default Dashboard;