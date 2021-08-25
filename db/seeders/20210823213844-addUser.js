'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {username: 'demo user1', firstName: 'demo', lastName: 'user1', email: 'demouser1@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'demo user2', firstName: 'demo', lastName: 'user2', email: 'demouser2@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()}

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
