import multer from "multer";
import path from "path";

export default {
    'realisationProfil': () => {
        let storage = multer.diskStorage({
            destination: function(req, file, cb) {
                let root = path.join('..', '..', 'uploads', 'realisations');
                req.pathFileUpload = root;  // pour récupérer le chemin du fichier au middelware suivant dans le param req.pathFileUpload

                cb(null, root);
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
                let root = path.join('..', '..', 'uploads', 'blogs');
                req.pathFileUpload = root;

                cb(null, root);
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
                let root = path.join('..', '..', 'uploads', 'teams');
                req.pathFileUpload = root;

                cb(null, root);
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