import React from "react";
import "./Forms.css";

export const LoginForm = props => (
    <div className="row">
        <div className="input-field col s4 offset-s2">
            <input
                type="text"
                id="first-name"
                {...props}
            />
            <label htmlFor="first-name">First Name</label>
        </div>
        <div className="input-field col s4">
            <input
                type="text"
                id="last-name"
                {...props}
            />
            <label htmlFor="last-name">Last Name</label>
        </div>
        <div className="input-field col s8 offset-s2">
            <input
                type="text"
                id="email"
                {...props}
            />
            <label htmlFor="email">Email</label>
        </div>
    </div>
);