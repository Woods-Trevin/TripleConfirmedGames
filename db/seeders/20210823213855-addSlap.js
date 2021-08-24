'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('SlapOns', [

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('SlapOns', null, {});
  }
};
