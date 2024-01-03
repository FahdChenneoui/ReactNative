module.exports = (app) => {
    const bondss= require('../controllers/BondC.controllers.js');
    app.post('/bondss',bondss.creer); 
    app.get('/bondss',bondss.afficherTout);
    app.get('/bondss/:bondssId',bondss.afficherUn);
    app.put('/bondss/:bondssId',bondss.modifier);
    app.delete('/bondss/:bondssId',bondss.supprimer)
}