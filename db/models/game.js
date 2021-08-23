'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    studio: DataTypes.STRING,
    avgCleanRating: DataTypes.INTEGER,
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
  };
  return Game;
};