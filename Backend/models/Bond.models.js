const mongoose = require('mongoose');
const bondcSchema = mongoose.Schema({
//Définir les champs
    NUMDeCommande :Number,
    clSoc:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'},   
    email:String,
    date:String,
    prix:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'},
}, { timestamps: true,
    collection: 'BondC'

/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('bondc', bondcSchema);