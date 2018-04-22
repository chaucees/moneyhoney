// *********************************************************************************
// DATA api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var db = require("../models");

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
  app.get('/api/budget/:id/income_exp/', function(req, res) {
    // get all income exps for current user
    db.IncomeExps.findAll({
      where: {
        Budget_id: req.params.id
      }
    }).then(function(dbListIE) {
      res.json(dbListIE);
    });
  });

  // get route that returns budget object from budget id
  app.get('/api/budget/:id', function(req, res) {
    db.Budgets.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBudget) {
      res.json(dbBudget);
    });
  })

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

  // creating budget object
  app.post('/api/budget', function(req, res) {
    db.Budgets.create({name: req.body.name}).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });

  app.post('/api/budget/:id/income_exp', function(req, res) {
    // create income exp model
    db.IncomeExps.create({Budget_id: req.params.id, title: req.body.title, type: req.body.type, value: req.body.value}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // get route that returns user object from user email
  app.get('/api/user/:email', function(req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.put('/api/income_exp/:id', function(req, res) {
    // update income exp model
  });

  app.delete('/api/income_exp/:id', function(req, res) {
    // delete income exp model
  });
};
