import React, { Component } from "react";
import "./Nav.css";
import Logo from "./images/logo-blue.png";
import { LoginBtn, LogoutBtn } from "../../components/Buttons";
import { Navbar, NavItem, SideNav, SideNavItem, Button } from "react-materialize";

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
          {/* <Navbar
          trigger={<i className="material-icons sm-48 menu">menu</i>}
          options={{ closeOnClick: true }}
        > */}
          {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
          <SideNav
          trigger={<i className="material-icons sm-48 menu transparent">menu</i>}
          options={{ closeOnClick: true }}
        >
          <SideNavItem href="#"><span className="nav-item-text">Home</span></SideNavItem>
          <SideNavItem href="dashboard"><span className="nav-item-text">Dashboard</span></SideNavItem>
        </SideNav>

          {/* <ul>
            <li className="nav-item nav-item-home" href="#"><span className="nav-item-text">Home</span></li>
            <li className="nav-item nav-item-dash" href="dashboard"><span className="nav-item-text">Dashboard</span></li>
          </ul> */}
          {/* </Navbar> */}
        </nav>
      </div>
    )
  }
}

export default Nav;