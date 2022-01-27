const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('DvoVPrqYTU', 'DvoVPrqYTU', 'AaFi6T49RA', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});


module.exports = sequelize;
