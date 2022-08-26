const CardController = require('../controllers/card.controller');
module.exports = function(app){
    app.get('/api', CardController.index);
    app.post('/api/myCards', CardController.saveCard);
    app.get('/api/myCards', CardController.allMyCards);
    app.get('/api/myCards/:id', CardController.oneCard);
    app.delete('/api/myCards/:id', CardController.deleteOneCard);
}