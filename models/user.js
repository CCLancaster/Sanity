'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email address'
        }
      }
    },
    name: {
      type:  DataTypes.STRING,
      validate: {
        len: {
          args: [1, 99],
          msg: 'Name must be between 1 and 99 characters'
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
    }
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
  };

  // fyi, this is a constructor function 
  // do *not* use arrow functions as we're going to use "this"
  // this compares entered password to hashed password
  user.prototype.validPassword = function(passwordTyped) {
    return bcrypt.compareSync(passwordTyped, this.password);
  };

  // remove the password before serializing
  user.prototype.toJSON = function() {
    let userData = this.get();
    delete userData.password;
    return userData;

  }

  return user;
};

