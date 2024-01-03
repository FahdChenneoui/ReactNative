module.exports = (app) => {
    const DeviS = require('../controllers/devis.controllers.js');
    app.post('/DeviS', DeviS.creer);
    app.get('/DeviS', DeviS.afficherTout);
    app.get('/DeviS/:DeviSId', DeviS.afficherUn);
    app.put('/DeviS/:DeviSId', DeviS.modifier);
    app.delete('/DeviS/:DeviSId', DeviS.supprimer)
}