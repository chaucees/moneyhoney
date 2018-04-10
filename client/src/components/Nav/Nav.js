import React from "react";
import "./Nav.css";
import Logo from "./images/logo-transp.png";
import { Navbar, NavItem, Dropdown, Button } from "react-materialize";

const Nav = props => (
    <Navbar>
        <img src={Logo} className="logo brand-logo center"></img>
        <Dropdown trigger={
            <i className="material-icons">menu</i>
        }>
            <NavItem>one</NavItem>
            <NavItem>two</NavItem>
            <NavItem divider />
            <NavItem>three</NavItem>
        </Dropdown>
    </Navbar>
    // <nav>
    //     <div className="nav-wrapper">
    //         <ul id="dropdown1" class="dropdown-content">
    //             <li><a href="#" data-activates="mobile-demo" className="button-collapse dropdown-trigger"><i className="material-icons">menu</i></a></li>
    //             <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    //             <li><a href="#!">one</a></li>
    //             <li><a href="#!">two</a></li>
    //             <li class="divider"></li>
    //             <li><a href="#!">three</a></li>
    //         </ul>
    //         <img src={Logo} className="logo brand-logo center"></img>
    //         <ul id="nav-mobile" className="left hide-on-med-and-down">
    //             <li><a href="sass.html">Sass</a></li>
    //             <li><a href="badges.html">Components</a></li>
    //             <li><a href="collapsible.html">JavaScript</a></li>
    //             <li><a href="#" data-activates="mobile-demo" className="button-collapse dropdown-trigger"><i className="material-icons">menu</i></a></li>
    //             <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons">menu</i></a></li>
    //         </ul>
    //     </div>
    // </nav>
);

export default Nav;