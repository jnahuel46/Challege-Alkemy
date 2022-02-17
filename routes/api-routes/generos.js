const { generoGet, generoPost, generoPut, generoDelete } = require('../../controllers/generos-controller');
const { validarAdminRol, validarCampos } = require('../../middlewares/middlewares');


const router = require('express').Router();


router.get('/', generoGet);


//CREAR GENERO
router.post('/', [
    validarAdminRol,
    validarCampos
], generoPost);

//ACTUALIZAR GENERO
router.put('/:generoId', [
    validarAdminRol,
    validarCampos
], generoPut);

//BORRAR GENERO
router.delete('/:generoId', [
    validarAdminRol,
    validarCampos
], generoDelete);

module.exports = router;