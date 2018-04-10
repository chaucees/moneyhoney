import React from "react";
import "./Nav.css";
import Logo from "./images/logo-transp-01.png";
import { Navbar, NavItem, Dropdown, Col } from "react-materialize";

const Nav = props => (
    <Navbar>
        <img src={Logo} className="logo brand-logo center"></img>
        <Dropdown 
        className="hamburger"
        trigger={
            <i className="material-icons md-48 menu">menu</i>
        }>
            <NavItem className="nav-item"><span className="nav-item-text">Dashboard</span></NavItem>
            <NavItem className="nav-item"><span className="nav-item-text">Add Budget</span></NavItem>
            <NavItem className="nav-item"><span className="nav-item-text">Logout</span></NavItem>
        </Dropdown>
    </Navbar>
);

export default Nav;