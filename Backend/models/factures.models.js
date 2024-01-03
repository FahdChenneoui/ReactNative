const mongoose = require('mongoose');
const factureSchema = mongoose.Schema({
//Définir les champs
    codeFact :String,
    client:{type:mongoose.Schema.Types.ObjectId,
        ref:'client'
    },
    bondc:{type:mongoose.Schema.Types.ObjectId,
    ref:'bondc'
    },
    Prix:{type:mongoose.Schema.Types.ObjectId,
        ref:'paiement'
    },
}, { timestamps: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('facture', factureSchema);