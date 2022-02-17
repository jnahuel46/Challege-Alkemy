const Genero = require("../models/Genero");
const Pelicula_Serie = require("../models/Pelicula_Serie");


const generoGet = async (req, res) => {
    Genero.findAll({
        include: {
            model: Pelicula_Serie,
            attributes: ['titulo']
        }
    }).then(generos => res.json(generos));
};

const generoPost = async (req, res) => {
    const generos = await Genero.create(req.body);
    res.json(generos);
};

const generoPut = async (req, res) => {
    await Genero.update(req.body, {
        where: { id: req.params.generoId }
    });
    res.json({ success: 'Se ha modificado' });
};

const generoDelete = async (req, res) => {
    await Genero.destroy({
        where: { id: req.params.generoId }
    });
    res.json({ success: 'Se ha eliminado' });
};

module.exports = {
    generoGet,
    generoPost,
    generoPut,
    generoDelete
}