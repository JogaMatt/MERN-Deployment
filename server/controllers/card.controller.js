const {Pokemon} = require('../models/card.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello Matt!"
    })
}

module.exports.saveCard = (req, res) => {
    const {pokeSet, cardId, image} = req.body
    Pokemon.create({
        pokeSet,
        cardId,
        image
    })
        .then(card => res.json(card))
        .catch(err => res.status(400).json(err))
}

module.exports.allMyCards = (req, res) => {
    Pokemon.find({})
        .then(card => res.json(card))
        .catch(err => res.json(err))
}

module.exports.oneCard = (req, res) => {
    Pokemon.findOne({cardId:req.params.id})
        .then(pokemon => res.json(pokemon))
        .catch(err => res.json(err))
}

module.exports.deleteOneCard = (req, res) => {
    Pokemon.deleteOne({_id:req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.json(err))
}