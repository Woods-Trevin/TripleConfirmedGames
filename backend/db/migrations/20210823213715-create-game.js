'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(1000),
        unique: true
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      studio: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      avgCleanRating: {
        type: Sequelize.NUMERIC(2,1)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(10000)
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.STRING(50)
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
    options.tableName = 'Games'
    return queryInterface.dropTable(options);
  }
};
