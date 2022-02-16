const { validarAdminRol, validarCampos } = require('../../middlewares/middlewares');
const Genero = require('../../models/Genero');
const Pelicula_Serie = require('../../models/Pelicula_Serie');


const router = require('express').Router();


router.get('/', async (req, res) => {

    Genero.findAll({
        include: {
            model: Pelicula_Serie,
            attributes: ['titulo']
        }
    }).then(generos => res.json(generos));
});


//CREAR GENERO
router.post('/',[
    validarAdminRol,
    validarCampos
], async (req, res) => {

    const generos = await Genero.create(req.body);
    res.json(generos);
});

//ACTUALIZAR GENERO
router.put('/:generoId',[
    validarAdminRol,
    validarCampos
], async (req, res) => {

    await Genero.update(req.body, {
        where: { id: req.params.generoId }
    });
    res.json({ success: 'Se ha modificado' });
});

//BORRAR GENERO
router.delete('/:generoId',[
    validarAdminRol,
    validarCampos
], async (req, res) => {

    await Genero.destroy({
        where: { id: req.params.generoId }
    });
    res.json({ success: 'Se ha eliminado' });
});

module.exports = router;