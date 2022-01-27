const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const Pelicula_Serie = require('./Pelicula_Serie');

class Personaje extends Model { }

Personaje.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imagen: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    edad: {
        type: DataTypes.INTEGER,
    },
    peso: {
        type: DataTypes.INTEGER,
    },
    historia: {
        type: DataTypes.STRING,
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'personaje',
    timestamps: false // We need to choose the model name
});


//el personaje pertenezca a varias peliculas
//crea una nueva base de datos llamada personajes_peliculas
Personaje.belongsToMany(Pelicula_Serie, { through: "personajes_peliculas" });
Pelicula_Serie.belongsToMany(Personaje, { through: "personajes_peliculas" });


module.exports = Personaje;


