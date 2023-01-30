'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = 'ReviewLikes'


module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(options, [

    {like: true, reviewId:1, userId:1, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:2, userId:2, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:3, userId:3, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:4, userId:3, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:5, userId:3, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:6, userId:3, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:7, userId:4, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:8, userId:4, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:9, userId:4, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:10, userId:4, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:11, userId:4, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:12, userId:4, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:13, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:14, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:15, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:16, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:17, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:18, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:19, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:20, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:21, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:22, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:23, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:24, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:25, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:26, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:27, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:28, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:29, userId:5, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:30, userId:6, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:31, userId:6, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:32, userId:6, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:33, userId:6, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:34, userId:6, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:35, userId:6, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:36, userId:6, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:37, userId:6, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:38, userId:7, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:39, userId:7, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:40, userId:7, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:2, userId:8, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:2, userId:9, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:2, userId:9, createdAt: new Date(), updatedAt: new Date()},
    {like: true, reviewId:2, userId:10, createdAt: new Date(), updatedAt: new Date()},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(options, null, { truncate: true, cascade: true, restartIdentity: true });  }
};
