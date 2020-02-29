'use strict';
module.exports = (sequelize, DataTypes) => {
  const selfAffirm = sequelize.define('selfAffirm', {
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  selfAffirm.associate = function(models) {
    // associations can be defined here
    models.selfaffirm.belongsTo(models.user);
  };
  return selfAffirm;
};