import React from "react";
import "./Forms.css";

export const LoginForm = props => (
    <div className="row">
        <div className="input-field col s8 offset-s2">
            <input
                type="text"
                id="email"
                {...props}
            />
            <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s8 offset-s2">
            <input
                type="text"
                id="password"
                {...props}
            />
            <label htmlFor="password">Password</label>
        </div>
    </div>
);