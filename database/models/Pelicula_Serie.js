const { Sequelize, DataTypes, Model, DATE } = require('sequelize');
const sequelize = require('../db');
const Genero = require('./Genero');

class Pelicula_Serie extends Model { }

Pelicula_Serie.init({
    // Model attributes are defined here
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imagen: {
        type: DataTypes.STRING,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    fecha_creacion: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW },
    calificacion: {
        type: DataTypes.INTEGER,
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'pelicula_serie',
    timestamps: false // We need to choose the model name
});

//añadir una foreignKey de generoId a la tabla peliculas
Genero.hasOne(Pelicula_Serie);
Pelicula_Serie.belongsTo(Genero);
module.exports = Pelicula_Serie;

