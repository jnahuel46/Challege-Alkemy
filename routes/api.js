const router = require('express').Router();


const { checkToken } = require('../middlewares/middlewares');
const apiPersonajesRouter = require('./api-routes/personajes');
const apiUsersRouter = require('./api-routes/users');
const apiPeliculasRouter = require('./api-routes/peliculas');
const apiGenerosRouter = require('./api-routes/generos');

router.use('/generos', checkToken, apiGenerosRouter);
router.use('/movies', checkToken, apiPeliculasRouter);
router.use('/characters', checkToken, apiPersonajesRouter);
router.use('/auth', apiUsersRouter);

module.exports = router;


