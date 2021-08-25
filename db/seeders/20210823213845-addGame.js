'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Games', [
     {title: 'League of Legends',studio:'Riot Games',avgCleanRating: 5, description: 'game description 1', releaseDate:'August 5, 2001', createdAt: new Date(), updatedAt: new Date()},
     {title: 'Sekiro',studio:'Riot Games',avgCleanRating: 5, description: 'game description 2', releaseDate:'August 5, 2001', createdAt: new Date(), updatedAt: new Date()},
     {title: 'Valheim',studio:'Riot Games',avgCleanRating: 5, description: 'game description 3', releaseDate:'August 5, 2001', createdAt: new Date(), updatedAt: new Date()},
     {title: 'Oldschool Runescape',studio:'Riot Games',avgCleanRating: 5, description: 'game description 4', releaseDate:'August 5, 2001', createdAt: new Date(), updatedAt: new Date()},
     {title: 'Rainbow Six Siege',studio:'Riot Games',avgCleanRating: 5, description: 'game description 5', releaseDate:'August 5, 2001', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, { truncate: true, cascade: true, restartIdentity: true });  }
};
