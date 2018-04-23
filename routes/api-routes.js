// *********************************************************************************
// DATA api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var db = require("../models");
var bcrypt = require("bcrypt");

module.exports = function(app) {
  app.get('/api/income_exp', function(req, res) {
    // get all income exps for current user
  });

  app.post('/api/income_exp', function(req, res) {
    // create income exp model
  });

  app.put('/api/income_exp/:id', function(req, res) {
    // update income exp model
  });

  app.delete('/api/income_exp/:id', function(req, res) {
    // delete income exp model
  });
};
