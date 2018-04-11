import React from "react";
import "./Footer.css";
import { Footer } from "react-materialize";
import Icons from "./images/socialicons.png";

const FooterBar = props => (
    <Footer copyrights="Designed by The Final Four"
        moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">&copy; 2018</a>
        }
        links={
            <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Login</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Profile</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Help</a></li>
            </ul>
        }
        className='example'
    >
        <div className="col s4">
            <h5 className="white-text">Follow</h5>
            <p className="grey-text text-lighten-4"><img src={Icons}></img></p>
        </div>
        <div className="col s4">
            <h5 className="white-text">Account</h5>
            <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Login</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Profile</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Help</a></li>
            </ul>
        </div>
        <div className="col s4">
            <h5 className="white-text">Support</h5>
            <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Login</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Profile</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Help</a></li>
            </ul>        
        </div>
       

    

    </Footer>
);

export default FooterBar;