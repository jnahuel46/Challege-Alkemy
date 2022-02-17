const { personajeGet, personajeGetByID, personajeFiltroNombre, personajeFiltroEdad, personajeFiltroPeso, personajePost, personajePut, personajeDelete } = require('../../controllers/personajes-controller');
const { validarAdminRol, validarCampos } = require('../../middlewares/middlewares');
const router = require('express').Router();

//LISTAR TODOS LOS PERSONAJES
router.get('/', personajeGet);

//LISTAR PERSONAJE CON DETALLE
router.get('/detalle/:personajeId', personajeGetByID);

//FILTRO POR NOMBRE
router.get('/filtro/nombre', personajeFiltroNombre);

//FILTRO POR EDAD
router.get('/filtro/age', personajeFiltroEdad);

//FILTRO POR PESO
router.get('/filtro/peso', personajeFiltroPeso);

//CREAR PERSONAJE
router.post('/', [
    validarAdminRol,
    validarCampos
], personajePost);

//ACTUALIZAR PERSONAJE
router.put('/:personajeId', [
    validarAdminRol,
    validarCampos
], personajePut);

//BORRAR PERSONAJE
router.delete('/:personajeId', [
    validarAdminRol,
    validarCampos
], personajeDelete);

module.exports = router;