import React from "react";
import "./Nav.css";
import Logo from "./images/logo-transp-01.png";
import { LoginBtn, LogoutBtn } from "../../components/Buttons";
import { Navbar, NavItem, Dropdown, SideNav, Button, SideNavItem } from "react-materialize";

const Nav = props => (
    <Navbar>
        <div className="right">
            <LoginBtn />
            {/* <LogoutBtn /> */}
        </div>
        <img src={Logo} className="logo brand-logo center"></img>
        {/* <Dropdown 
        className="hamburger"
        trigger={
            <i className="material-icons sm-48 menu">menu</i>
        }>
            <NavItem className="nav-item"><span className="nav-item-text">Dashboard</span></NavItem>
            <NavItem className="nav-item"><span className="nav-item-text">Add Budget</span></NavItem>
            <NavItem className="nav-item"><span className="nav-item-text">Logout</span></NavItem>
        </Dropdown> */}
        <SideNav
            trigger={<i className="material-icons sm-48 menu">menu</i>}
            options={{ closeOnClick: true }}
        >
            <SideNavItem className="nav-item"><span className="nav-item-text">Dashboard</span></SideNavItem>
            <SideNavItem className="nav-item"><span className="nav-item-text">Add Budget</span></SideNavItem>
            <SideNavItem className="nav-item"><span className="nav-item-text">Logout</span></SideNavItem>
        </SideNav>
    </Navbar>
);

export default Nav;