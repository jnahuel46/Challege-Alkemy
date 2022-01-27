const User = require('../../database/models/User');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');


const { check, validationResult } = require('express-validator');
sgMail.setApiKey(process.env.API_KEY_SENDGRID);
const sendMail = async(msg) => {
    try {
        await sgMail.send(msg);
        console.log("Mensaje enviado correctamente");
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};

router.post('/register', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email debe estar correcto').isEmail()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);

    sendMail({
        to: req.body.email,
        from: 'shere_nahuel@hotmail.com',
        subject: 'Bienvenido/a',
        text: 'Bienvenido a la REST API de Disney'
    });

});

router.post('/login', async (req,res) => {
    const user = await User.findOne({ where : { email: req.body.email} });

    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            res.json({succes: createToken(user) });
        } else {
            res.json({ error: 'Error en usuario y/o contraseña'});
        }
    } else {
        res.json({ error: 'Error en usuario y/o contraseña'});
    }
});


const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(10, 'minutes').unix()
    }

    return jwt.encode(payload, 'frase secreta')
}

module.exports = router;