'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

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
    }, options);
  },
  down: (queryInterface, Sequelize) => {
    options.tableName = 'SlapOns'

    return queryInterface.dropTable(options);
  }
};
