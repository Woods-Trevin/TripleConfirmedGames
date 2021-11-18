'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameJoin = sequelize.define('GameJoin', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  GameJoin.associate = function (models) {
    // associations can be defined here
    GameJoin.belongsTo(models.Game, { foreignKey: "gameId" })
    GameJoin.belongsTo(models.User, { foreignKey: "userId" })
  };
  return GameJoin;
};