const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/middlewares');
const { userRegister, userLogin } = require('../../controllers/users-controller');
const router = require('express').Router();


router.post('/register', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email debe estar correcto').isEmail(),
    validarCampos
], userRegister);

router.post('/login', userLogin);

module.exports = router;