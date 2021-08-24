'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Shelves', [

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Shelves', null, {});
  }
};
