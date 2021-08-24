'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('ReviewLikes', [

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('ReviewLikes', null, {});
  }
};
