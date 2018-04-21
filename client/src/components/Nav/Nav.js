import React, { Component } from "react";
import "./Nav.css";
import Logo from "./images/logo-blue.png";
import { LoginBtn, LogoutBtn } from "../../components/Buttons";
import { SideNav, SideNavItem } from "react-materialize";

class Nav extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated, userHasScopes } = this.props.auth;

    return (
      <div className="nav-container">
        <nav>
          <div className="right">
            {
              !isAuthenticated() && (
                <LoginBtn
                  auth={this.props.auth}
                />
              )
            }
            {
              isAuthenticated() && (
                <LogoutBtn
                  auth={this.props.auth}
                />
              )
            }

          </div>
          <img src={Logo} alt="Money Honey Logo" className="logo brand-logo center"></img>
          <SideNav
          trigger={<i className="material-icons sm-48 menu nav-menu">menu</i>}
          options={{ closeOnClick: true }}
        >
          <SideNavItem href="#"><span className="nav-item-text">Home</span></SideNavItem>
          <SideNavItem href="dashboard"><span className="nav-item-text">Dashboard</span></SideNavItem>
        </SideNav>
        </nav>
      </div>
    )
  }
}

export default Nav;