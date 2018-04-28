// *********************************************************************************
// DATA api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var db = require("../models");
// ROUTE SCHEMA
// -----------------------
// GET    /<model>     - get all <model>s
// POST   /<model>     - create a <model>
// GET    /<model>/:id - get a <model>
// PUT    /<model>/:id - update a <model>
// DELETE /<model>/:id - delete a <model>
// GET    /<a>/:id/<b> - get all <b> belonging to <a>
// GET    /<a>/:id/<b>/:id - get a <b> belonging to <a>

// GET    /budget/:id/income_expense - get all income expenses for budget :id
// *********************************************************************************

module.exports = function(app) {
  // -----------------------
  // Budgets
  // -----------------------
  // creates a new budget
  app.post('/api/budget', function(req, res) {
    // console.log("create budget" req, res);
    db.Budgets.create({name: req.body.name, user_email: req.body.user_email}).then(function(dbBudgetCreate) {
      res.json(dbBudgetCreate);
    });
  });
  // returns budget object from budget id
  app.get('/api/budget/:id', function(req, res) {
    db.Budgets.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBudget) {
      res.json(dbBudget);
    });
  })
  // return budgets belonging to user_email
  app.get('/api/user/:email', function(req, res) {
    db.Budgets.findAll({
      where: {
        user_email: req.params.email
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // update budget with budget id
  app.put('/api/budget/:id', function(req, res) {
    db.Budgets.update({
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(dbBudgetUpdate) {
    res.json(dbBudgetUpdate);
    })
  });
// delete budget with budget id
app.delete('/api/budget/:id', function(req, res) {
  db.Budgets.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbBudgetDestroy) {
    res.json(dbBudgetDestroy);
  })
});
// -----------------------
// BudgetItems (IncomeExp)
// -----------------------
// returns all income-expense items
app.get('/api/budget/:id/income_exp/', function(req, res) {
  db.IncomeExps.findAll({
    where: {
      Budget_id: req.params.id
    }
  }).then(function(dbListIE) {
    res.json(dbListIE);
  });
});
// returns income-expense object with income-expense id
app.get('/api/budget/:budget_id/income_exp/:income_exp_id', function(req, res) {
  db.IncomeExps.findOne({
    where: {
      Budget_id: req.params.budget_id,
      id: req.params.income_exp_id
    }
  }).then(function(dbIncomeExp) {
    res.json(dbIncomeExp);
  });
})
// create income-expense item
app.post('/api/budget/:id/income_exp', function(req, res) {
  db.IncomeExps.create({
    Budget_id: req.params.id,
    title: req.body.title,
    type: req.body.type,
    value: req.body.value,
    date: req.body.date,
    frequency: req.body.frequency,
    willRecur: req.body.willRecur
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});
// update income-expense with income-expense id
app.put('/api/income_exp/:id', function(req, res) {
  db.IncomeExps.update({
    title: req.body.title,
    type: req.body.type,
    value: req.body.value,
    date: req.body.date,
    frequency: req.body.frequency,
    willRecur: req.body.willRecur
  },
     {
      where : {
        id: req.params.id
      }
  }).then(function(dbUpdateItem) {
    res.json(dbUpdatedItem);
  })
});
// delete income-expense with income-expense id
app.delete('/api/income_exp/:id', function(req, res) {
  db.IncomeExps.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbDestroyItem) {
    res.json(dbDestroyItem);
  })
});

// -----------------------
// Users
// -----------------------
// GET /api/users/
//  returns User's id and email
//
// POST /api/users/
//  creates a new user
//
// GET /api/users/:email
//  returns user object from user email
// app.get('/api/user/:email', function(req, res) {
//   db.User.findOne({
//     where: {
//       email: req.params.email
//     }
//   }).then(function(dbUser) {
//     res.json(dbUser);
//   });
// });
//
// GET /api/users/:id
//  returns User's email

};
