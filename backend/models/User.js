const mongoose = require('mongoose');//Importation de Mongoose
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({//Création du schéma en utilisant la fonction Schema de Mongoose
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);