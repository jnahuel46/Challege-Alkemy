const Pelicula_Serie = require('../../database/models/Pelicula_Serie');
const Personaje = require('../../database/models/Personaje');

const router = require('express').Router();


router.get('/', async (req, res) => {

    /*Personaje.findAll({
        attributes: ['nombre', 'imagen']
    }).then(personajes => res.json(personajes));
    const personajes = await Personaje.findAll(req.body);
    res.json(personajes);*/
    await Personaje.findAll({
        include: {
            model: Pelicula_Serie
        }
    }).then(personajes => res.json(personajes));
});




router.post('/', async (req, res) => {

    const personaje = await Personaje.create(req.body);
    res.json(personaje);

});

router.put('/:personajeId', async (req, res) => {

    await Personaje.update(req.body, {
        where: { id: req.params.personajeId }
    });
    res.json({ success: 'Se ha modificado' });

});

router.delete('/:personajeId', async (req, res) => {

    await Personaje.destroy({
        where: { id: req.params.personajeId }
    });
    res.json({ success: 'Se ha eliminado' });

});

module.exports = router;