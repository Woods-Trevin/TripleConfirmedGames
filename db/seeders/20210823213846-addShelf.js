'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Shelves', [
     { name: 'Currently Playing', userId: 1, createdAt: new Date(), updatedAt: new Date() },
     { name: 'Wishlist', userId: 1, createdAt: new Date(), updatedAt: new Date() },
     { name: 'Completed', userId: 1, createdAt: new Date(), updatedAt: new Date() },
     { name: 'Played', userId: 1, createdAt: new Date(), updatedAt: new Date() },
     { name: 'Watchlist', userId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shelves', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
