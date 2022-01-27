const Genero = require('../../database/models/Genero');
const Pelicula_Serie = require('../../database/models/Pelicula_Serie');


const router = require('express').Router();


router.get('/', async (req, res) => {

    Genero.findAll({
        include: {
            model: Pelicula_Serie,
            attributes: ['titulo']
        }
    }).then(generos => res.json(generos));

});


//CREAR UN GET POR ID DE DE UN PERSONAJE CON SUS DETALLES Y PELICULAS RELACIONADAS
router.post('/', async (req, res) => {

    const generos = await Genero.create(req.body);
    res.json(generos);

});

router.put('/:generoId', async (req, res) => {

    await Genero.update(req.body, {
        where: { id: req.params.generoId }
    });
    res.json({ success: 'Se ha modificado' });

});

router.delete('/:generoId', async (req, res) => {

    await Genero.destroy({
        where: { id: req.params.generoId }
    });
    res.json({ success: 'Se ha eliminado' });

});

module.exports = router;