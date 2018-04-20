import React from "react";
import "./BudgetDetail.css";
import { Collection, Table } from "react-materialize";

export const BudgetExpenses = ({ children }) => (
    <div className="expenses-panel">
        <div className="expense-title-panel">
            <h1 className="expense-title center">Expenses</h1>
        </div>
        <Table striped={true}>
            <thead>
                <tr>
                    <th data-field="name">Name</th>
                    <th data-field="amount">Amount</th>
                    <th data-field="due-date">Due Date</th>
                    <th data-field="frequency">Frequency</th>
                    {/* <Collection header="Expenses" className="collection-header">
        { children }
    </Collection>     */}
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
);