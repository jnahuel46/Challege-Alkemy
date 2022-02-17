const Pelicula_Serie = require("../models/Pelicula_Serie");
const Personaje = require("../models/Personaje");



const peliculasGet = async (req, res) => {
   
    const peliculas = await Pelicula_Serie.findAll({
        attributes: ['imagen', 'titulo', 'fecha_creacion']
    });
    res.json(peliculas);
};

const peliculaGetDetail = async (req, res) => {
    
    const peliculas = await Pelicula_Serie.findAll({
        where: { id: req.params.peliculaId },
        attributes: ['titulo', 'imagen', 'fecha_creacion', 'calificacion'],
        include: [{ model: Personaje, attributes: ['nombre', 'imagen'] }]
    })
    res.json(peliculas);
};

const peliculaFilterName = async (req, res) => {
    
    const { nombre } = req.query;
    const pelicula = await Pelicula_Serie.findOne({ where: { titulo: nombre } });
    res.json(pelicula);
};

const peliculaFilterGenero = async (req, res) => {
    
    const { generoId } = req.query;
    const personaje = await Pelicula_Serie.findAll({ where: { generoId: generoId } });
    res.json(personaje);
};

const peliculaFiltroOrder = async (req, res) => {//order=ASC | DESC
    
    const { order } = req.query;
    const personaje = await Pelicula_Serie.findAll({
        order: [
            ['fecha_creacion', order]
        ],
        attributes: ['titulo', 'imagen', 'fecha_creacion', 'calificacion']
    });
    res.json(personaje);
};

const peliculasPost = async (req, res) => {
    
    const peliculas = await Pelicula_Serie.create(req.body);
    res.json(peliculas);
};

const peliculasUpdate = async (req, res) => {
    
    await Pelicula_Serie.update(req.body, {
        where: { id: req.params.peliculaId }
    });
    res.json({ success: 'Se ha modificado' });
};

const peliculasDelete = async (req, res) => {
    
    await Pelicula_Serie.destroy({
        where: { id: req.params.peliculaId }
    });
    res.json({ success: 'Se ha eliminado' });
};


module.exports = {
    peliculasGet,
    peliculaGetDetail,
    peliculaFilterName,
    peliculaFilterGenero,
    peliculaFiltroOrder,
    peliculasPost,
    peliculasUpdate,
    peliculasDelete
}