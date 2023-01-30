'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = 'Users'

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(options, [
    {username: 'demo user1', firstName: 'demo', lastName: 'user1', email: 'demouser1@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'demo user2', firstName: 'demo', lastName: 'user2', email: 'demouser2@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'TheCleanOne', firstName: 'demo', lastName: 'user2', email: 'TheCleanOne@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'BoomBlaster', firstName: 'demo', lastName: 'user2', email: 'BoomBlaster@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'Cereal Killer', firstName: 'demo', lastName: 'user2', email: 'CerealKiller@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'Hectik', firstName: 'demo', lastName: 'user2', email: 'Hectik@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'Fist Wizard', firstName: 'demo', lastName: 'user2', email: 'FistWizard@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'FireByMisFire', firstName: 'demo', lastName: 'user2', email: 'FireByMisFire@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'High Kingdom Warrior', firstName: 'demo', lastName: 'user2', email: 'HighKingdomWarrior@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'Nickname Master', firstName: 'demo', lastName: 'user2', email: 'NicknameMaster@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'Street Squirrel', firstName: 'demo', lastName: 'user1', email: 'StreetSquirrel@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'Sugar Man', firstName: 'demo', lastName: 'user2', email: 'SugarMan@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'Toe', firstName: 'demo', lastName: 'user2', email: 'Toe@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'Zesty Dragon', firstName: 'demo', lastName: 'user2', email: 'ZestyDragon@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'StreetLightss', firstName: 'demo', lastName: 'user2', email: 'StreetLightss@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'TheTruthHurts17', firstName: 'demo', lastName: 'user2', email: 'TheTruthHurts17@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'whatajoke', firstName: 'demo', lastName: 'user2', email: 'whatajoke@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'TheoreticalHero', firstName: 'demo', lastName: 'user2', email: 'TheoreticalHero@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'SOLIDIFIEDSNAKE', firstName: 'demo', lastName: 'user2', email: 'SOLIDIFIEDSNAKE@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()},
    {username: 'sheep455246', firstName: 'demo', lastName: 'user2', email: 'sheep455246@gmail.com', hashedPassword: '$2a$10$ntKEU923CjZexJ1PL.K95./2yz0lMSmEN9HwP6d41D4Zj2BTRLzNy', createdAt: new Date(), updatedAt: new Date()}

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options, null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
