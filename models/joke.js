'use strict';
module.exports = (sequelize, DataTypes) => {
  const joke = sequelize.define('joke', {
    content: DataTypes.TEXT
  }, {});
  joke.associate = function(models) {
    // associations can be defined here
    models.joke.belongsToMany(models.user, {through: "usersJokes"})
  };
  return joke;
};