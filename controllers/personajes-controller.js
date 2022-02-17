const Pelicula_Serie = require("../models/Pelicula_Serie");
const Personaje = require("../models/Personaje");



const personajeGet = async (req, res) => {

    const personajes = await Personaje.findAll({
        attributes: ['nombre', 'imagen']
    });
    res.json(personajes);
};

const personajeGetByID = async (req, res) => {

    const personajes = await Personaje.findAll({
        where: { id: req.params.personajeId },
        attributes: ['nombre', 'imagen', 'edad', 'peso', 'historia'],
        include: [{ model: Pelicula_Serie, attributes: ['titulo', 'imagen'] }]
    })
    res.json(personajes);
};

const personajeFiltroNombre = async (req, res) => {

    const { nombre } = req.query;
    const personaje = await Personaje.findOne({ where: { nombre: nombre } });
    res.json(personaje);
};

const personajeFiltroEdad = async (req, res) => {

    const { age } = req.query;
    const personaje = await Personaje.findOne({ where: { edad: age } });
    res.json(personaje);
};

const personajeFiltroPeso = async (req, res) => {

    const { peso } = req.query;
    const personaje = await Personaje.findOne({ where: { peso: peso } });
    res.json(personaje);
};

const personajePost = async (req, res) => {

    const personaje = await Personaje.create(req.body);
    res.json(personaje);

};

const personajePut = async (req, res) => {

    await Personaje.update(req.body, {
        where: { id: req.params.personajeId }
    });
    res.json({ success: 'Se ha modificado' });

};

const personajeDelete = async (req, res) => {

    await Personaje.destroy({
        where: { id: req.params.personajeId }
    });
    res.json({ success: 'Se ha eliminado' });

};

module.exports = {
    personajeGet,
    personajeGetByID,
    personajeFiltroNombre,
    personajeFiltroEdad,
    personajeFiltroPeso,
    personajePost,
    personajePut,
    personajeDelete
}


