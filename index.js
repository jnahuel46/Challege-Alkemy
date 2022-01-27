const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');
const sequelize = require('./database/db');

const app = express();


require('./database/db');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server starter');

    //conectar a la base

    sequelize.sync({ force: false }).then(() => {
        console.log('Connection has been established successfully.');
    }).catch(error => {
        console.error('Unable to connect to the database:', error);
    })

});

