'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Shelves'


module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(options, [
     { name: 'Currently Playing', userId: 1, createdAt: new Date(), updatedAt: new Date() },
     { name: 'Wishlist', userId: 1, createdAt: new Date(), updatedAt: new Date() },
     { name: 'Completed', userId: 1, createdAt: new Date(), updatedAt: new Date() },
     { name: 'Played', userId: 1, createdAt: new Date(), updatedAt: new Date() },
     { name: 'Watchlist', userId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options, null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
