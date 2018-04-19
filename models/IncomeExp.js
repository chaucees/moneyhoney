'use strict';
module.exports = (sequelize, DataTypes) => {
  var IncomeExp = sequelize.define('IncomeExp', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "please complete your title name"
        },
      },
      len: {
        args: [5,200],
        msg: "title your entry"
      }
    },

    type: {
      type: DataTypes.STRING,
      notEmpty: {
        args: true,
        msg: "please designate a type"
      },
      len: {
        args: [
          5, 200
        ],
        msg: "Income or Expense"
      }
    },

    value: {
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [
          1, 200000
        ],
        msg: "dollar amount"
      }
    }
  });

  // IncomeExp.associate = function(models) {
  //   IncomeExp.belongsTo(models.User, {
  //   });
  // };
  return IncomeExp;
};
