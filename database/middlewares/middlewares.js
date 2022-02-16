const jwt = require('jwt-simple');
const moment = require('moment');
const { validationResult } = require('express-validator');
const User = require('../../database/models/User');





const checkToken = (req, res, next) => {


    if (!req.headers['user-token']) {
        return res.status(401).json({
            error: 'Necesitas incluir el user-token en el header'
        });
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'frase secreta');

    } catch (error) {
        return res.status(401).json({
            error: 'El token es incorrecto'
        });
    }

    if (payload.expiredAt < moment().unix()) {
        return res.status(401).json({
            error: 'El token a expirado'
        });
    }

    req.usuarioId = payload.usuarioId;
    next();
};

const validarCampos = (req, res, next) => {//Como es un middleware necesita un tercer arugmento cuando pasa

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();

};

const validarAdminRol = async (req, res, next) => {

    const usuario = await User.findOne({ where: { id: req.usuarioId } });
    req.id = req.usuarioId;
    req.usuario = usuario;
    //validar rol del usuario
    const { rol } = req.usuario;//saco los datos que necesito de la request creadda en el checkToken
    if (rol !== 'ADMIN_ROL') {
        return res.status(401).json({
            msg: ` El usuario no es administrador, acceso denegado`
        });
    }

    next();
};




module.exports = {
    checkToken,
    validarCampos,
    validarAdminRol
}