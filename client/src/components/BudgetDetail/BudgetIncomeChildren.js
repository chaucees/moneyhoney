import React from "react";
import "./BudgetDetail.css";
import { CollectionItem } from "react-materialize";

export const BudgetIncomeChildren = props => (
    <td>{ props.children } Income</td>
    // <CollectionItem className="collection-item">
    //     { props.children }
    //     Income!
    // </CollectionItem>    
);