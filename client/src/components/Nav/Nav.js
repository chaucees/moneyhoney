import React, { Component } from "react";
import "./Nav.css";
import Logo from "./images/logo-blue.png";
import { LoginBtn, LogoutBtn } from "../../components/Buttons";
import { SideNav, SideNavItem } from "react-materialize";
import { ProfilePhoto } from "../Profile/ProfilePhoto";

class Nav extends Component {
  // componentWillMount() {
  //   this.setState({ profile: {} });
  //   const { userProfile, getProfile } = this.props.auth;
  //   if (!userProfile) {
  //     getProfile((err, profile) => {
  //       this.setState({ profile: profile });
  //     });
  //   } else {
  //     this.setState({ profile: userProfile });
  //   }
  // }
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
    // const {profile}=this.state;
    return (
      
      <div className="nav-wrapper">
        <nav>
          <div className="right">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {
              !isAuthenticated() && (
                <LoginBtn
                  auth={this.props.auth}
                />
              )
            }
            </li>
            {/* <li>
            {
              isAuthenticated() && (
              <ProfilePhoto 
                  profile={profile}
                />
              )
            }
            </li> */}
            <li>
            {
              isAuthenticated() && (
                <LogoutBtn
                  auth={this.props.auth}
                />
              )
            }
            </li>
            </ul>

          </div>
          <img src={Logo} alt="Money Honey Logo" className="logo brand-logo center"></img>
          <SideNav
          trigger={<i className="material-icons sm-48 menu nav-menu">menu</i>}
          options={{ closeOnClick: true }}
        >
          <SideNavItem href="home"><span className="nav-item-text">Home</span></SideNavItem>
          <SideNavItem href="dashboard"><span className="nav-item-text">Dashboard</span></SideNavItem>
          { !isAuthenticated() && (
            <SideNavItem onClick={this.login.bind(this)}><span className="nav-item-text">Login</span></SideNavItem>
          )}
          { isAuthenticated() && (
            <SideNavItem onClick={this.logout.bind(this)}><span className="nav-item-text">Logout</span></SideNavItem>
          )}
          
        </SideNav>
        </nav>
      </div>
    )
  }
}

export default Nav;