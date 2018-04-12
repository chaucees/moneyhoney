import React from "react";
import "./Footer.css";
import { Footer } from "react-materialize";
import Icons from "./images/socialicons.png";

const FooterBar = props => (
    <Footer copyrights="Designed by The Final Four"
        moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">&copy; 2018</a>
        }
        // links={
        //     <ul>
        //         <li><a className="grey-text text-lighten-3" href="#">Login</a></li>
        //         <li><a className="grey-text text-lighten-3" href="dashboard">Profile</a></li>
        //         <li><a className="grey-text text-lighten-3" href="#">FAQ</a></li>
        //         <li><a className="grey-text text-lighten-3" href="#">Help</a></li>
        //     </ul>
        // }
        className='example'
    >
    <div className="container-fluid">
        <div className="row">
            <div className="col s12 m6">
                <h5 className="white-text">Follow</h5>
                <p className="grey-text text-lighten-4"><img src={Icons}></img></p>
            </div>
            <div className="col s12 m6">
                <h5 className="white-text">Account</h5>
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#">Login</a></li>
                    <li><a className="grey-text text-lighten-3" href="dashboard">Profile</a></li>
                    <li><a className="grey-text text-lighten-3" href="logout">Logout</a></li>
                    <li><a className="grey-text text-lighten-3" href="signup">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </div>

    

    </Footer>
);

export default FooterBar;