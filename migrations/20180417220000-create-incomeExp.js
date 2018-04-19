'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IncomeExp', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(20)
      },
      type: {
        type: Sequelize.STRING(20)
      },
      value: {
        type: Sequelize.STRING(20)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IncomeExp');
  }
};
