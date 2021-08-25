'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {username: 'demo user1', firstName: 'demo', lastName: 'user1', email: 'demouser1@gmail.com', hashedPassword: 'Unclean!2', createdAt: new Date(), updatedAt: new Date()},
    {username: 'demo user2', firstName: 'demo', lastName: 'user2', email: 'demouser2@gmail.com', hashedPassword: 'Unclean1@', createdAt: new Date(), updatedAt: new Date()}

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
