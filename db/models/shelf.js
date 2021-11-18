'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Shelf.associate = function (models) {
    // associations can be defined here
    Shelf.belongsTo(models.User, { foreignKey: "userId" })

    const columnMapping = {
      through: "SlapOn",
      otherKey: "gameId",
      foreignKey: "shelfId"
    }
    Shelf.belongsToMany(models.Game, columnMapping);
    Shelf.hasMany(models.SlapOn, {foreignKey: 'shelfId', onDelete: 'CASCADE', hooks: true })
  };
  return Shelf;
};
