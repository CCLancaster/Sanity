'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersJokes = sequelize.define('usersJokes', {
    userId: DataTypes.INTEGER,
    jokeId: DataTypes.INTEGER
  }, {});
  usersJokes.associate = function(models) {
    // associations can be defined here
  };
  return usersJokes;
};