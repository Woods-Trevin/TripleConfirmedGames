'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SlapOns',
      [
        { shelfId: 1, gameId: 2, createdAt: new Date(), updatedAt: new Date() },
        { shelfId: 2, gameId: 3, createdAt: new Date(), updatedAt: new Date() },
        { shelfId: 3, gameId: 2, createdAt: new Date(), updatedAt: new Date() },
        { shelfId: 2, gameId: 4, createdAt: new Date(), updatedAt: new Date() },
        { shelfId: 1, gameId: 5, createdAt: new Date(), updatedAt: new Date() }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SlapOns', null, { truncate: true, cascade: true, restartIdentity: true });  }
};
