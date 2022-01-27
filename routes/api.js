const router = require('express').Router();


const middlewares = require('./middlewares');
const apiPersonajesRouter = require('./api-routes/personajes');
const apiUsersRouter = require('./api-routes/users');
const apiPeliculasRouter = require('./api-routes/peliculas');
const apiGenerosRouter = require('./api-routes/generos');

router.use('/generos', middlewares.checkToken, apiGenerosRouter);
router.use('/movies', middlewares.checkToken, apiPeliculasRouter);
router.use('/characters', middlewares.checkToken, apiPersonajesRouter);
router.use('/auth', apiUsersRouter);

module.exports = router;


