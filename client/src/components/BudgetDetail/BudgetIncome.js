import React from "react";
import "./BudgetDetail.css";
import { Collection } from "react-materialize";

export const BudgetIncome = ({ children }) => (
    <Collection header="Income" className="collection-header">
        { children }
    </Collection>    
);