'use strict';
module.exports = (sequelize, DataTypes) => {
  var Budget = sequelize.define('Budgets', {
    name: {
      type: DataTypes.STRING,
    }
  });

  return Budget;
};
