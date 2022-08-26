const mongoose = require('mongoose');
const PokedexSchema = new mongoose.Schema({
    name:{
        type: String
    },
    pokedexNum:{
        type: Number
    },
    image:{
        type: String
    },
    shinyImage:{
        type: String
    },
    text:{
        type: String
    },
    height:{
        type: String
    },
    weight:{
        type: Number
    },
    category:{
        type: String
    },
    abilities:{
        type: Object
    },
    type:{
        type: Array
    },
    weaknesses:{
        type: Array
    }
}, {timestamps: true});
module.exports.Pokedex = mongoose.model('Pokedex', PokedexSchema);