'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IncomeExps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Budget_id: {
        foreignKey: true,
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
      },
      date: {
        type: Sequelize.DATE
      },
      frequency: {
        type: Sequelize.STRING(20)
      },
      willRecur: {
        type: Sequelize.STRING(20)
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IncomeExps');
  }
};
