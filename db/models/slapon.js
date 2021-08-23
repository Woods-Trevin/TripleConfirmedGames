'use strict';
module.exports = (sequelize, DataTypes) => {
  const SlapOn = sequelize.define('SlapOn', {
    shelfId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  SlapOn.associate = function(models) {
    // associations can be defined here
  };
  return SlapOn;
};