'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameJoin = sequelize.define('GameJoin', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  GameJoin.associate = function(models) {
    // associations can be defined here
  };
  return GameJoin;
};