const mongoose = require('mongoose');
const paiementSchema = mongoose.Schema({
//Définir les champs
    type :String,
    ville:String,
    datePaie:String,
    CodePostal:String
}, { timestamps: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('paiement', paiementSchema);