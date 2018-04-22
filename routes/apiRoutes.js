// *********************************************************************************
// DATA api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Require controllers
const UsersController       = ('../controllers/UsersController');
const BudgetsController     = ('../controllers/BudgetsController');
const BudgetItemsController = ('../controllers/BudgetItemsController');

/*
 * ROUTES
 * -----------------------
 * Users
 * -----------------------
 * GET /api/users/
 *  returns User's id and email
 * 
 * POST /api/users/
 *  creates a new user
 * 
 * GET /api/users/:email
 *  returns User's id
 * 
 * GET /api/users/:id
 *  returns User's email
 * -----------------------
 * Budgets
 * -----------------------
 * GET /api/budgets/:user_id
 *  returns budgets returning to a User
 * 
 * GET /api/budgets/:budget_id
 *  returns Budget name by budget_id
 * 
 * POST /api/budgets/
 *  creates a new Budget
 * 
 * PUT /api/budgets/:budget_id
 *  updates Budget with id budget_id (with new name)
 * 
 * DELETE /api/budgets/:budget_id
 *  deletes Budget with id budget_id
 * -----------------------
 * BudgetItems
 * -----------------------
 * GET /api/budget_items/:budget_id
 *  returns all BudgetItems with a given budget_id, 
 *  i.e., for populating a budget
 * 
 * GET /api/budget_items/:budget_id/income
 *  returns all BudgetItems with a given budget_id that are of type income
 * 
 * GET /api/budget_items/:budget_id/expense
 *  returns all BudgetItems with a given budget_id that are of type expense
 * 
 * POST /api/budget_items/:budget_id
 *  creates a new budget item for budget with id of budget_id
 * 
 * PUT /api/budget_items/:budget_item_id
 *  updates a budget item with id of budget_item_id
 * 
 * DELETE /api/budget_items/:budget_item_id
 *  deletes a budget item with id of budget_item_id
 */

// User routes
router.route('/api/users/')
  .get(UsersController.getUser)
  .post(UsersController.createUser);

router.route('/api/users/:email')
  .get(UsersController.getIdByEmail);

router.route('/api/users/:id')
  .get(UsersController.getEmailById);

// Budget routes
router.route('/api/budgets')
  .post(BudgetsController.createBudget);

router.route('/api/budgets/:user_id')
  .get(BudgetssController.getBudgetsByUser);

router.route('/api/budgets/:budget_id')
  .get(BudgetsController.getBudgetNameById)
  .put(BudgetsController.updateBudget)
  .delete(BudgetsController.deleteBudget);

// BudgetItem routes
router.route('/api/budget_items/:budget_id')
  .get(BudgetItemsController.getBudgetItemsByBudgetId)
  .post(BudgetItemsController.createBudgetItem);

router.route('/api/budget_items/:budget_id/income')
  .get(BudgetItemsController.getIncomeItems);

router.route('/api/budget_items/:budget_id/expense')
  .get(BudgetItemsController.getExpenseItems);

router.route('/api/budget_items/:budget_item_id')
  .put(BudgetItemsController.updateBudgetItem)
  .delete(BudgetItemsController.deleteBudgetItem);

module.exports = router;
