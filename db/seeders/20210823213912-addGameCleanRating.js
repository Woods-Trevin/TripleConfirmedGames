'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('GameCleanRatings', [

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GameCleanRatings', null, { truncate: true, cascade: true, restartIdentity: true });  }
};
