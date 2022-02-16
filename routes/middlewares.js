const jwt = require('jwt-simple');
const moment = require('moment');




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

module.exports = {
    checkToken
}