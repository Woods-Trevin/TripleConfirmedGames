'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    studio: DataTypes.STRING,
    avgCleanRating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    releaseDate: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};