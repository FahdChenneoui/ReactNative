const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: Number,
    image: String,
    description: String,
}, {
    timestamps: true,
    collection: 'articles',

    /* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
    createdAt et updatedAt au schéma. */
});

module.exports = mongoose.model('Article', ArticleSchema);
