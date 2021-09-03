//Import
const multer = require('multer');
//Dictionnaire pour pouvoir générer l'extension du nom de fichier
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};
//Création de l'objet configuration de multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});
//Export du middleware
module.exports = multer({ storage }).single('image');