import React, { Component } from "react";
import "./Nav.css";
import Logo from "./images/logo-transp-01.png";
import { LoginBtn, LogoutBtn } from "../../components/Buttons";
import { Navbar, NavItem, Dropdown, SideNav, Button, SideNavItem, Modal } from "react-materialize";

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

    return(
      <Navbar>
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
        <img src={Logo} className="logo brand-logo center"></img>
        <SideNav
          trigger={<i className="material-icons sm-48 menu">menu</i>}
          options={{ closeOnClick: true }}
        >
            <SideNavItem className="nav-item" href="#"><span className="nav-item-text">Home</span></SideNavItem>
            <SideNavItem className="nav-item" href="signup"><span className="nav-item-text">Sign Up</span></SideNavItem>
            <SideNavItem className="nav-item" href="dashboard"><span className="nav-item-text">Dashboard</span></SideNavItem>
            <SideNavItem className="nav-item" href="edit"><span className="nav-item-text">Add Budget</span></SideNavItem>
            <SideNavItem className="nav-item" href="login"><span className="nav-item-text">Login</span></SideNavItem>
            <SideNavItem className="nav-item" href="logout"><span className="nav-item-text">Logout</span></SideNavItem>
        </SideNav>
    </Navbar>
    )
  }
}

export default Nav;