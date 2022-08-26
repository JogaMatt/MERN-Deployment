const {Pokedex} = require('../models/pokedex.model');
module.exports.saveEntry = (req, res) => {
    const {
        name,
        pokedexNum,
        image,
        shinyImage,
        text,
        height,
        weight,
        category,
        abilities,
        type,
        weaknesses
    } = req.body;
    Pokedex.create({
        name,
        pokedexNum,
        image,
        shinyImage,
        text,
        height,
        weight,
        category,
        abilities,
        type,
        weaknesses
    })
        .then(entry => res.json(entry))
        .catch(err => res.status(400).json(err))
}

module.exports.nationalDex = (req, res) => {
    Pokedex.find({})
        .then(entries => res.json(entries))
        .catch(err => res.json(err))
}

module.exports.onePokemon = (req, res) => {
    Pokedex.findOne({pokedexNum:req.params.pokedexNum})
        .then(pokemon => res.json(pokemon))
        .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    Pokedex.deleteOne({_id:req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.json(err))
}