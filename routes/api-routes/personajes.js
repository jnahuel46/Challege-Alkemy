const { validarAdminRol, validarCampos } = require('../../middlewares/middlewares');
const Pelicula_Serie = require('../../models/Pelicula_Serie');
const Personaje = require('../../models/Personaje');

const router = require('express').Router();

//LISTAR TODOS LOS PERSONAJES
router.get('/', async (req, res) => {
    const personajes = await Personaje.findAll({
        attributes: ['nombre', 'imagen']
    });
    res.json(personajes);
});

//LISTAR PERSONAJE CON DETALLE
router.get('/detalle/:personajeId', async (req, res) => {
    const personajes = await Personaje.findAll({
        where: { id: req.params.personajeId },
        attributes: ['nombre', 'imagen', 'edad', 'peso', 'historia'],
        include: [{ model: Pelicula_Serie, attributes: ['titulo', 'imagen'] }]
    })
    res.json(personajes);
});

//FILTRO POR NOMBRE
router.get('/filtro/nombre', async (req, res) => {

    const { nombre } = req.query;
    const personaje = await Personaje.findOne({ where: { nombre: nombre } });
    res.json(personaje);
});
//FILTRO POR EDAD
router.get('/filtro/age', async (req, res) => {

    const { age } = req.query;
    const personaje = await Personaje.findOne({ where: { edad: age } });
    res.json(personaje);
});

//FILTRO POR PESO
router.get('/filtro/peso', async (req, res) => {

    const { peso } = req.query;
    const personaje = await Personaje.findOne({ where: { peso: peso } });
    res.json(personaje);
});

//CREAR PERSONAJE
router.post('/', [
    validarAdminRol,
    validarCampos
], async (req, res) => {

    const personaje = await Personaje.create(req.body);
    res.json(personaje);

});

//ACTUALIZAR PERSONAJE
router.put('/:personajeId', [
    validarAdminRol,
    validarCampos
], async (req, res) => {

    await Personaje.update(req.body, {
        where: { id: req.params.personajeId }
    });
    res.json({ success: 'Se ha modificado' });

});

//BORRAR PERSONAJE
router.delete('/:personajeId', [
    validarAdminRol,
    validarCampos
], async (req, res) => {

    await Personaje.destroy({
        where: { id: req.params.personajeId }
    });
    res.json({ success: 'Se ha eliminado' });

});

module.exports = router;