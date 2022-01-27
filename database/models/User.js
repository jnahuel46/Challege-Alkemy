const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model { }

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'user' // We need to choose the model name
});

module.exports = User;