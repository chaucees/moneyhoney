import React from "react";
import "./BudgetDetail.css";
import { Table } from "react-materialize";

export const BudgetExpenses = ({ children }) => (
    <div className="expenses-panel z-depth-4">
        <div className="title-panel">
            <h1 className="title center">Expenses</h1>
        </div>
        <Table>
            <thead>
                <tr>
                    <th data-field="name">Name</th>
                    <th data-field="amount">Amount</th>
                    <th data-field="due-date">Due Date</th>
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
);