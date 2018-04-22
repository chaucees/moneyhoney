'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER, 
      notNull: true, 
      autoIncrement: true, 
      primaryKey: true
    },
    user_email: {
      type: DataTypes.STRING,
      notnull: true,
    }
  });

  User.associate = function(models) {
    models.User.hasMany(models.Budgets);
  };

  return User;
};
 
