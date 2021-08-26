'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('ReviewLikes', [

    {like: true, reviewId:1, userId:2, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:2, userId:2, createdAt: new Date(), updatedAt: new Date()}

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ReviewLikes', null, { truncate: true, cascade: true, restartIdentity: true });  }
};
