'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Reviews', [
    {title: 'Great Game!', content: 'runescape was long!', userId:1 , gameId:4, createdAt: new Date(), updatedAt: new Date()},
    {title: 'bad game!', content: 'runescape was too complicated!', userId:2 , gameId:4, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, { truncate: true, cascade: true, restartIdentity: true });  }
};
