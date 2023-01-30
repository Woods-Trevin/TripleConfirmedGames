'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Shelf, { foreignKey: "userId" })
    User.hasMany(models.GameCleanRating, { foreignKey: "gameId" })
    User.hasMany(models.ReviewLike, { foreignKey: 'userId' })
    User.hasMany(models.Review, { foreignKey: "userId" })

    const columnMapping = {
      through: "GameJoin",
      otherKey: "gameId",
      foreignKey: "userId",
    }
    User.belongsToMany(models.Game, columnMapping)


  };
  return User;
};
