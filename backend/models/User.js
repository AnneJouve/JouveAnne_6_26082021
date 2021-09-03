//Imports
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
//Configuration du schéma
const userSchema = mongoose.Schema({//Création du schéma en utilisant la fonction Schema de Mongoose
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
//Passage de mongoose-unique-validator en plugin au schéma
userSchema.plugin(uniqueValidator);
//Export du schéma en passant en arguments le nom du modèle et le schéma créé
module.exports = mongoose.model('User', userSchema);