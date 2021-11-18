'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SlapOns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shelfId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Shelves"
        }
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Games"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SlapOns');
  }
};