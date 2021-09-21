/**
* 
*/

const multer  = require('multer');
const path    = require('path');

let upload = {
    'realisationProfil': () => {
        let storage = multer.diskStorage({
            destination: function(req, file, cb) {
                let path = path.join('..', '..', 'uploads', 'realisations');
                req.pathFileUpload = path;  // pour récupérer le chemin du fichier au middelware suivant dans le param req.pathFileUpload

                cb(null, path);
            },

            filename: function (req, file, cb) {
                let fileName = Date.now() + file.originalname;
                req.fileNameUpload = fileName; // pour récupérer le nom du fichier au middelware suivant dans le param req.fileNameUpload

                cb(null, fileName);
            }
        });

        return multer({storage: storage}).single('realisationProfil');
    },

    'blogProfil': () => {
        let storage = multer.diskStorage({
            destination: function(req, file, cb) {
                let path = path.join('..', '..', 'uploads', 'blogs');
                req.pathFileUpload = path;

                cb(null, path);
            },

            filename: function (req, file, cb) {
                let fileName = Date.now() + file.originalname;
                req.fileNameUpload = fileName;

                cb(null, fileName);
            }
        });

        return multer({storage: storage}).single('blogProfil');
    },

    'teamProfil': () => {
        let storage = multer.diskStorage({
            destination: function(req, file, cb) {
                let path = path.join('..', '..', 'uploads', 'teams');
                req.pathFileUpload = path;

                cb(null, path);
            },

            filename: function (req, file, cb) {
                let fileName = Date.now() + file.originalname;
                req.fileNameUpload = fileName;

                cb(null, fileName);
            }
        });

        return multer({storage: storage}).single('teamProfil');
    }

    /**
    * autres ...
    */
};

module.exports = upload;