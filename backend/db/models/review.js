'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  Review.associate = function (models) {
    // associations can be defined here
    Review.hasMany(models.ReviewLike, { foreignKey: 'reviewId', onDelete: 'CASCADE', hooks: true })
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Game, { foreignKey: 'gameId' })
  };
  return Review;
};
