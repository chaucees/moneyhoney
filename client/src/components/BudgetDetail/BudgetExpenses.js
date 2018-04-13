import React from "react";
import "./BudgetDetail.css";
import { Collection } from "react-materialize";

export const BudgetExpenses = ({ children }) => (
    <Collection header="Expenses" className="collection-header">
        { children }
    </Collection>    
);