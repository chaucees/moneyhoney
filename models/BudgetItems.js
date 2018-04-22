'use strict';
module.exports = (sequelize, DataTypes) => {
  var BudgetItem = sequelize.define('BudgetItem', {
    // Unique id
    id: {
      type         : Sequelize.INTEGER,
      notNull      : true,
      autoIncrement: true,
      primaryKey   : true
    },
    // Name: e.g., payroll, water bill, etc.
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg : "Budget item needs name"
        },
      },
      len: {
        args: [5,200],
        msg : "Budget item needs name of min. 5 characters"
      }
    },
    // Type: whether it's an income or expense
    type: {
      type: DataTypes.STRING,
      notEmpty: {
        args: true,
        msg : "please designate a type"
      },
      len: {
        args: [
          5, 200
        ],
        msg: "Income or Expense"
      }
    },
    // Amount: dollar amount
    amount: {
      type     : DataTypes.STRING,
      allowNull: false,
      len      : {
        args: [
          1, 200000
        ],
        msg: "dollar amount"
      }
    },
    // Date: income in-date or expense payout date
    date: {
      type     : DataTypes.DATE,
      allowNull: false
    },
    // will_recur: Will this budget item recur regularly?
    will_recur: {
      type     : DataTypes.BOOLEAN,
      allowNull: false
    },
    // recur_frequency: How often will it recur?
    recur_frequency: {
      type        : DataTypes.INTEGER,
      allowNull   : false,
      defaultValue: 0
    }
  });

  BudgetItem.associate = function(models) {
    models.BudgetItem.belongsTo(models.Budgets, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return BudgetItem;
};
