import React from "react";
import "./Footer.css";
import { Footer } from "react-materialize";
import Icons from "./images/socialicons.png";

// COLUMNS NEEDED:
// FOLLOW - with Icons (fb, youtube, twitter)
//ICONS FOR FOLLOW: * youtube: personal_video * 
// Contact - honey@money.com
// Support - Faq, help desk, status
// Account - Login, Profile, Logout

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
            <div className="col s4">
                <h5 className="white-text">Follow</h5>
                <p className="grey-text text-lighten-4"><img src={Icons}></img></p>
            </div>
            <div className="col s4">
                <h5 className="white-text">Account</h5>
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#">Login</a></li>
                    <li><a className="grey-text text-lighten-3" href="dashboard">Profile</a></li>
                    <li><a className="grey-text text-lighten-3" href="logout">Logout</a></li>
                    <li><a className="grey-text text-lighten-3" href="signup">Sign Up</a></li>
                </ul>
            </div>
            <div className="col s4">
                <h5 className="white-text">Support</h5>
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#">FAQ</a></li>
                    <li><a className="grey-text text-lighten-3" href="#">Help</a></li>
                    <li><a className="grey-text text-lighten-3" href="#">Contact</a></li>
                </ul>        
            </div>
        </div>
    </div>

    

    </Footer>
);

export default FooterBar;