const express = require('express');//Importation d'Express
const bodyParser = require('body-parser');//Importation de body-parser
const mongoose = require('mongoose');

/*const saucesRoutes = require('./routes/sauces');*/
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://new-user_123:Rwsq5K3o6THK9XTT@cluster0.xy9wy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();//Appelle la méthode Express et permet de créer une application Express

app.use((req, res, next) => {//Fonction utilisée pour tout type de requête
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());


/*app.use('/api/sauces', saucesRoutes);*/
app.use('/api/auth', userRoutes);

module.exports = app;//Exportation de la constante pour pouvoir y accéder depuis les autres fichiers