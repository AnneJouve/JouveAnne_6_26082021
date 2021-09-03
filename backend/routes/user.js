//Imports
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
//Enregistrement des routes dans le router
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
//Export du router
module.exports = router;