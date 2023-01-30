'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    studio: DataTypes.STRING,
    avgCleanRating: DataTypes.NUMERIC,
    description: DataTypes.STRING,
    releaseDate: DataTypes.STRING
  }, {});
  Game.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "SlapOn",
      otherKey: "shelfId",
      foreignKey: "gameId",
    }
    Game.belongsToMany(models.Shelf, columnMapping)

    Game.hasMany(models.GameCleanRating, { foreignKey: "gameId" })
    Game.hasMany(models.Review, { foreignKey: "gameId" })

    const map = {
      through: "GameJoin",
      otherKey: "userId",
      foreignKey: "gameId",
    }
    Game.belongsToMany(models.User, map)
  };
  return Game;
};
