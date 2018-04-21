import React from "react";
import "./Footer.css";
// import { Footer } from "react-materialize";
import Icons from "./images/socialicons.png";

const FooterBar = props => (

    <footer className="page-footer">
        <div className="col l6 s12">
            {/* <h5 className="white-text center">Follow</h5> */}
            <p className="grey-text text-lighten-4 icons"><img src={Icons} alt="icons"></img></p>
        </div>
        <div className="footer-copyright">
            <p className="designed-by">Designed by the Final Four</p>
            <a className="grey-text text-lighten-4 right copyright" href="#!">&copy; 2018</a>
        </div>
    </footer>

);

export default FooterBar;