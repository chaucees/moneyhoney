import React from "react";
import "./BudgetDetail.css";
import { CollectionItem } from "react-materialize";

export const BudgetExpensesChildren = props => (
    <CollectionItem className="collection-item">
        { props.children }
        Expenses!
    </CollectionItem>    
);