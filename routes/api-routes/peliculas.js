const { peliculasGet, peliculaGetDetail, peliculaFilterName, peliculaFilterGenero, peliculaFiltroOrder, peliculasUpdate, peliculasPost, peliculasDelete } = require('../../controllers/peliculas-controller');
const { validarAdminRol, validarCampos } = require('../../middlewares/middlewares');
const router = require('express').Router();

//LISTAR TODAS LAS PELICULAS
router.get('/', peliculasGet);

//LISTAR PELICULA CON DETALLE
router.get('/detalle/:peliculaId', peliculaGetDetail);


//FILTRO POR NOMBRE
router.get('/filtro/nombre', peliculaFilterName);

//FILTRO POR GENERO
router.get('/filtro/generoId', peliculaFilterGenero);

//FILTAR POR ORDEN ASC O DESC DE FECHA DE CREACION
router.get('/filtro/order', peliculaFiltroOrder);

//CREAR PELICULA
router.post('/', [
    validarAdminRol,
    validarCampos
], peliculasPost);

//ACTUALIZAR PELICULA
router.put('/:peliculaId', [
    validarAdminRol,
    validarCampos
], peliculasUpdate);

//BORRAR PELICULA
router.delete('/:peliculaId', [
    validarAdminRol,
    validarCampos
], peliculasDelete);

module.exports = router;