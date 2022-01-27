const { Sequelize, DataTypes, Model, DATE } = require('sequelize');
const sequelize = require('../db');
const Pelicula_Serie = require('./Pelicula_Serie');

class Genero extends Model { }

Genero.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'genero',
    timestamps: false // We need to choose the model name
});


module.exports = Genero;




