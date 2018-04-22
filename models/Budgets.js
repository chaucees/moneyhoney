'use strict';
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define('Budget', {
    // Unique id
    id: {
      type         : Sequelize.INTEGER,
      notNull      : true,
      autoIncrement: true,
      primaryKey   : true
    },
    // Name: e.g., House budget
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg : "Budget needs name"
        }
      },
      len: {
        args: [5, 200],
        msg : "Budget needs name of min. 5 characters"
      }
    }
  });

  Budget.associate = function(models) {
    models.Budget.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  Budget.associate = function(models) {
    models.Budget.hasMany(models.BudgetItems);
  };

  return Budget;
};
