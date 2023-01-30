'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'GameCleanRatings'


module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(options, [
     {rating: 1, userId: 1, gameId: 1, createdAt: new Date(), updatedAt: new Date()},
     {rating: 2, userId: 2, gameId: 2, createdAt: new Date(), updatedAt: new Date()},
     {rating: 3, userId: 2, gameId: 3, createdAt: new Date(), updatedAt: new Date()},
     {rating: 4, userId: 2, gameId: 4, createdAt: new Date(), updatedAt: new Date()},
     {rating: 5, userId: 2, gameId: 5, createdAt: new Date(), updatedAt: new Date()},
     {rating: 2, userId: 2, gameId: 6, createdAt: new Date(), updatedAt: new Date()},
     {rating: 2, userId: 2, gameId: 7, createdAt: new Date(), updatedAt: new Date()},
     {rating: 3, userId: 3, gameId: 8, createdAt: new Date(), updatedAt: new Date()},
     {rating: 3, userId: 3, gameId: 9, createdAt: new Date(), updatedAt: new Date()},
     {rating: 3, userId: 3, gameId: 10, createdAt: new Date(), updatedAt: new Date()},
     {rating: 3, userId: 3, gameId: 11, createdAt: new Date(), updatedAt: new Date()},
     {rating: 3, userId: 3, gameId: 12, createdAt: new Date(), updatedAt: new Date()},
     {rating: 3, userId: 3, gameId: 13, createdAt: new Date(), updatedAt: new Date()},
     {rating: 4, userId: 3, gameId: 14, createdAt: new Date(), updatedAt: new Date()},
     {rating: 4, userId: 4, gameId: 15, createdAt: new Date(), updatedAt: new Date()},
     {rating: 4, userId: 4, gameId: 16, createdAt: new Date(), updatedAt: new Date()},
     {rating: 4, userId: 4, gameId: 17, createdAt: new Date(), updatedAt: new Date()},
     {rating: 4, userId: 4, gameId: 18, createdAt: new Date(), updatedAt: new Date()},
     {rating: 4, userId: 5, gameId: 19, createdAt: new Date(), updatedAt: new Date()},
     {rating: 1, userId: 5, gameId: 20, createdAt: new Date(), updatedAt: new Date()},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options, null, { truncate: true, cascade: true, restartIdentity: true });  }
};
