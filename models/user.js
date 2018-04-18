'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id_fb: {
      type: DataTypes.STRING,
    },
    id_google: {
      type: DataTypes.STRING,
    }
  });

  return User;
};
 
