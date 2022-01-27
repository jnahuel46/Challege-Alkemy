const Pelicula_Serie = require('../../database/models/Pelicula_Serie');
const Personaje = require('../../database/models/Personaje');


const router = require('express').Router();


router.get('/', async (req, res) => {

    Pelicula_Serie.findAll({
        attributes: ['imagen', 'titulo','fecha_creacion']
    }).then(personajes => res.json(personajes));
    //const peliculas = await Pelicula_Serie.findAll();
    //res.json(peliculas);

});

router.get('/detalle', async (req, res) => {

    const peliculas = await Pelicula_Serie.findAll({
        include: Personaje,
    });
    res.json(peliculas);
    
});

router.post('/', async (req, res) => {

    const peliculas = await Pelicula_Serie.create(req.body);
    res.json(peliculas);

});

router.put('/:peliculaId', async (req, res) => {

    await Pelicula_Serie.update(req.body, {
        where: { id: req.params.peliculaId }
    });
    res.json({ success: 'Se ha modificado' });

});

router.delete('/:peliculaId', async (req, res) => {

    await Pelicula_Serie.destroy({
        where: { id: req.params.peliculaId }
    });
    res.json({ success: 'Se ha eliminado' });

});

module.exports = router;