import React from "react";
import "./Footer.css";
// import { Footer } from "react-materialize";
import Icons from "./images/socialicons.png";

const FooterBar = props => (

    <footer class="page-footer">
        <div class="col l6 s12">
            {/* <h5 className="white-text center">Follow</h5> */}
            <p className="grey-text text-lighten-4 icons"><img src={Icons} alt="icons"></img></p>
        </div>
        <div class="footer-copyright">
            <p className="designed-by">Designed by the Final Four</p>
            <a className="grey-text text-lighten-4 right copyright" href="#!">&copy; 2018</a>
        </div>
    </footer>

);

export default FooterBar;