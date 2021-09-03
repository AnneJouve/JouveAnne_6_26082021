//Import
const mongoose = require('mongoose');
//Configuration du schéma
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: { type: ['String <userId>'], default: [] },
    usersDisliked: { type: ['String <userId>'], default: [] },
});
//Export du schéma en passant en arguments le nom du modèle et le schéma créé
module.exports = mongoose.model('Sauce', sauceSchema);