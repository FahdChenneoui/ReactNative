const mongoose = require('mongoose');
const clientSchema = mongoose.Schema({
    //Définir les champs
    clNometprenom: String,
    clCin: Number,
    // cletat:Boolean,
    clDate: String,
    clMail: { type: String, required: true, unique: true },
    clTel: String,
    clSoc: String,
    clVille: String,
}, {
    timestamps: true,
    collection: 'Clients',

    /* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
    createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('client', clientSchema);