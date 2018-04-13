import React, { Component } from "react";
import "./Nav.css";
import Logo from "./images/logo-transp-01.png";
import { LoginBtn, LogoutBtn } from "../../components/Buttons";
import { Navbar, NavItem } from "react-materialize";

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
        <ul>
            <li className="nav-item" href="#"><span className="nav-item-text">Home</span></li>
            <li className="nav-item" href="dashboard"><span className="nav-item-text">Dashboard</span></li>
        </ul>
        {/* </Navbar> */}
    </nav>
    )
  }
}

export default Nav;