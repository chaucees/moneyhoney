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
	</div>
	</div>
</div>
        );
    }
}
export default Dashboard;