import React from "react";
import "./Forms.css";

export const SignupPasswordForm = props => (
    <div className="row">
        <div className="input-field col s8 offset-s2">
            <input
                type="text"
                id="password"
                {...props}
            />
            <label htmlFor="password">Password</label>
        </div>
        <div className="input-field col s8 offset-s2">
            <input
                type="text"
                id="retype-password"
                {...props}
            />
            <label htmlFor="retype-password">Re-Type Password</label>
        </div>
    </div>
);