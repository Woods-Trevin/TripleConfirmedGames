'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReviewLike = sequelize.define('ReviewLike', {
    like: DataTypes.BOOLEAN,
    reviewId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  ReviewLike.associate = function (models) {
    // associations can be defined here
    ReviewLike.belongsTo(models.Review, { foreignKey: 'reviewId' })
    ReviewLike.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return ReviewLike;
};