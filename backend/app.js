//Imports
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Sauce = require('./models/Sauce');
const path = require('path');
const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');
//Connexion de l'API à la base de données
mongoose.connect('mongodb+srv://new-user_123:Rwsq5K3o6THK9XTT@cluster0.xy9wy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
//Appelle de la méthode express et création application express
const app = express();
//Utilisations
app.use(helmet());
//Middleware pour éviter les erreurs CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);
//Export de l'application
module.exports = app;