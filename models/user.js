'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: {
      type:  DataTypes.STRING,
      validate: {
        len: {
          args: [1, 99],
          msg: 'Name must be between 1 and 99 characters'
        }
      }
      
    },
    lastName: {
      type:  DataTypes.STRING,
      validate: {
        len: {
          args: [1, 99],
          msg: 'Name must be between 1 and 99 characters'
        }
      }
      
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 99],
          msg: 'Password must be between 8 and 99 characters'
        }
      }
    },
    jokeSource: DataTypes.STRING,
    breathCount: DataTypes.INTEGER
  }, {   
    hooks: {
      beforeCreate: function(createdUser, options) {
        if(createdUser && createdUser.password) {
        // hash the password
        let hash = bcrypt.hashSync(createdUser.password, 10);
        // store the hash as the user's password
        createdUser.password = hash;
        // continue to save the user with no errors
        }
      }
    }
  });


  user.associate = function(models) {
    // associations can be defined here
    models.user.belongsToMany(models.joke, {through: "usersJokes"});
    models.user.hasMany(models.selfaffirm);
  };

  // this compares entered password to hashed password
  user.prototype.validPassword = function(passwordTyped) {
    return bcrypt.compareSync(passwordTyped, this.password);
  };

  // remove the password before serializing
  user.prototype.toJSON = function() {
    let userData = this.get();
    delete userData.password;
    return userData;

  };

  return user;
};