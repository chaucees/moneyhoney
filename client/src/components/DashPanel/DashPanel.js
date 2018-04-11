import React from "react";
import "./DashPanel.css";

export const DashPanel = ({ children }) => (
    <div className="row">
        <div className="col s12 row-item z-depth-2">
            { children }
        </div>
    </div>
);
