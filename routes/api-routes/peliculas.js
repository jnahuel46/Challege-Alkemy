const { validarAdminRol, validarCampos } = require('../../database/middlewares/middlewares');
const Pelicula_Serie = require('../../database/models/Pelicula_Serie');
const Personaje = require('../../database/models/Personaje');


const router = require('express').Router();

//LISTAR TODAS LAS PELICULAS
router.get('/', async (req, res) => {

    const peliculas = await Pelicula_Serie.findAll({
        attributes: ['imagen', 'titulo', 'fecha_creacion']
    });
    res.json(peliculas);
});

//LISTAR PELICULA CON DETALLE
router.get('/detalle/:peliculaId', async (req, res) => {
    const peliculas = await Pelicula_Serie.findAll({
        where: { id: req.params.peliculaId },
        attributes: ['titulo', 'imagen', 'fecha_creacion', 'calificacion'],
        include: [{ model: Personaje, attributes: ['nombre', 'imagen'] }]
    })
    res.json(peliculas);
});


//FILLTRO POR NOMBRE
router.get('/filtro/nombre', async (req, res) => {

    const { nombre } = req.query;
    const pelicula = await Pelicula_Serie.findOne({ where: { titulo: nombre } });
    res.json(pelicula);
});

//FILTRO POR GENERO
router.get('/filtro/generoId', async (req, res) => {

    const { generoId } = req.query;
    const personaje = await Pelicula_Serie.findAll({ where: { generoId: generoId } });
    res.json(personaje);
});

//FILTAR POR ORDEN ASC O DESC DE FECHA DE CREACION
router.get('/filtro/order', async (req, res) => {//order=ASC | DESC

    const { order } = req.query;
    const personaje = await Pelicula_Serie.findAll({
        order: [
            ['fecha_creacion', order]
        ],
        attributes: ['titulo', 'imagen', 'fecha_creacion', 'calificacion']
    });
    res.json(personaje);
});

//CREAR PELICULA
router.post('/',[
    validarAdminRol,
    validarCampos
], async (req, res) => {

    const peliculas = await Pelicula_Serie.create(req.body);
    res.json(peliculas);
});

//ACTUALIZAR PELICULA
router.put('/:peliculaId',[
    validarAdminRol,
    validarCampos
], async (req, res) => {

    await Pelicula_Serie.update(req.body, {
        where: { id: req.params.peliculaId }
    });
    res.json({ success: 'Se ha modificado' });
});

//BORRAR PELICULA
router.delete('/:peliculaId',[
    validarAdminRol,
    validarCampos
], async (req, res) => {

    await Pelicula_Serie.destroy({
        where: { id: req.params.peliculaId }
    });
    res.json({ success: 'Se ha eliminado' });
});

module.exports = router;