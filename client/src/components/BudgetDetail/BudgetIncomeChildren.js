import React from "react";
import "./BudgetDetail.css";
import { CollectionItem } from "react-materialize";

export const BudgetIncomeChildren = props => (
    <CollectionItem className="collection-item">
        { props.children }
        Income!
    </CollectionItem>    
);