const PokedexController = require('../controllers/pokedex.controller');
module.exports = function(app){
    app.post('/api/pokedex', PokedexController.saveEntry);
    app.get('/api/pokedex', PokedexController.nationalDex);
    app.get('/api/pokedex/:pokedexNum', PokedexController.onePokemon);
    app.delete('/api/pokedex/:id', PokedexController.delete);
}