import React from "react";
import "./BudgetDetail.css";
import { Collection, Table } from "react-materialize";

export const BudgetIncome = ({ children }) => (
    <div className="expenses-panel">
        <div className="title-panel">
            <h1 className="title center">Income</h1>
        </div>
        <Table striped={true}>
            <thead>
                <tr>
                    <th data-field="name">Name</th>
                    <th data-field="amount">Amount</th>
                    <th data-field="date">Date</th>
                    <th data-field="frequency">Frequency</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {children}
                </tr>
                <tr>
                    {children}
                </tr>
                <tr>
                    {children}
                </tr>
            </tbody>
        </Table>
    </div>
    // <Collection header="Income" className="collection-header">
    //     { children }
    // </Collection>    
);