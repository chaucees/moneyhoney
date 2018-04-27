import axios from 'axios';

export default {
  // Dashboard: get budgets for user
  // getBudgets: function(userId) {
  //   return axios.get()
  // },
  // Budget: get budget incomes and expenses for budget id
  getBudgetItems: function(budgetId) {
    return axios.get(`/api/budget/${budgetId}/income_exp`)
  },
  // Budget and Dashboard: get budget data 
  // (including name, user_id of owner, etc.)
  getBudgetMetadata: function(budgetId) {
    return axios.get(`/api/budget/${budgetId}`)
  },
  // Budget: gets specific budget item for a specific budget
  getBudgetOneBudgetItem: function(budgetId, budgetItemId) {
    return axios.get(`/api/budget/${budgetId}/income_exp/${budgetItemId}`)
  },
  // Budget: Create new budget
  /*
   * budgetData JSON
   * {
   *  name: "My budget",
   *  user_email: "test@example.com"
   * }
   */
  createBudget: function(budgetData) {
    return axios.post('/api/budget', budgetData)
  },
  // Budget: Create new income or expense
  /*
   * Budget data example
   * {
   *  title: "Budget item",
   *  type: "Income",       // alternatively, "Expense"
   *  value: 1800,
   *  date: "25 April, 2018",
   *  frequency: 30,
   *  willRecur: true
   * }
   */
  createBudgetItem: function(budgetId, data) {
    return axios.post(`/api/budget/${budgetId}/income_exp`, data)
  },
  // Dashboard and elsewhere: Get user ID from user email
  // getUserId: function(userEmail) {
  //   return axios.get(`/api/user/${userEmail}`)
  // }
  // Dashboard: Search for budgets belonging to userEmails
  findBudgets: function(userEmail) {
    return axios.get(`/api/user/${userEmail}`)
  },
  // Dashboard: Delete budget
  deleteBudget: function(budgetId) {
    return axios.delete(`/api/budget/${budgetId}`)
  }
}
