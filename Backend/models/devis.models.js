const mongoose = require('mongoose');
const devisSchema = mongoose.Schema({
//Définir les champs
    clNometprenom : {       
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
},
    clSoc:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'},
    date:String,
    catFis:String,
    prix:Number,
    remise:String
}, { timestamps: true,
    collection: 'Devis',

/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});

module.exports = mongoose.model('devis', devisSchema);