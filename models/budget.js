'use strict';
module.exports = (sequelize, DataTypes) => {
  var Budget = sequelize.define('Budgets', {
    name: {
      type: DataTypes.STRING
    },
    user_email: {
      type: DataTypes.STRING
    }
  });

  return Budget;
};
