/*
 * This is the business logic for determining how much cash user has to spend
 * each day of the month
 */

const moment = 'moment';

// Store values for income and expenses
const income = [
  {
    amount: 1500,
    dayIn: 1
  },
  {
    amount: 1500,
    dayIn: 15
  }
];

const expenses = [
  {
    amount: 800,
    dayOut: 3
  },
  {
    amount: 400,
    dayOut: 1
  },
  {
    amount: 350,
    dayOut: 10
  }
];

// Determine total income and total expenses for month
let totalIncome = 0;
income.forEach((item) => totalIncome += item.amount);
console.log("Total income: $" + totalIncome);

let totalExpenses = 0;
expenses.forEach((item) => totalExpenses += item.amount);
console.log("Total expenses: $" + totalExpenses);

let monthLength = 30;

// Find daily allowance
let dailyAllowance = (Math.floor(((totalIncome - totalExpenses) / monthLength) * 100) / 100).toFixed(2);
console.log("Daily allowance: $" + dailyAllowance);
