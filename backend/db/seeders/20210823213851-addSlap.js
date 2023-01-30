'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = 'SlapOns'


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(options,
      [
        { shelfId: 1, gameId: 2, createdAt: new Date(), updatedAt: new Date() },
        { shelfId: 2, gameId: 3, createdAt: new Date(), updatedAt: new Date() },
        { shelfId: 3, gameId: 2, createdAt: new Date(), updatedAt: new Date() },
        { shelfId: 2, gameId: 4, createdAt: new Date(), updatedAt: new Date() },
        { shelfId: 1, gameId: 5, createdAt: new Date(), updatedAt: new Date() }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options, null, { truncate: true, cascade: true, restartIdentity: true });  }
};
