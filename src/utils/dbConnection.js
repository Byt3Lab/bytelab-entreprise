let mongoose = require('mongoose');
let dbConfig = require('./dbConfig').devlopement;

let uri = "mongodb://" + dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.dbName;
/**
* pour mongodb atlas en ligne
* let uri = dbConfig.cluster;
*/

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true}, function (err) {
    if (err) console.log("erreur de connection à la base de donnée!");
    else console.log("base de donnée connectée !");
});