const mongoose = require('mongoose');
const PokemonSchema = new mongoose.Schema({
    pokeSet:{
        type: String
    },
    cardId:{
        type: String
    },
    image:{
        type: String
    }
}, {timestamps: true});
module.exports.Pokemon = mongoose.model('Pokemon', PokemonSchema);