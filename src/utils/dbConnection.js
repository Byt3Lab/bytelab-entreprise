import mongoose from "mongoose";
import dbConfig from "./dbConfig.js";

export default () => {
    const config = dbConfig.mongodb.dev;

    let uri = "mongodb://" + config.host + ':' + config.port + '/' + config.dbName;
    /**
    * pour mongodb atlas en ligne
    * let uri = dbConfig.cluster;
    */
    
    mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true}, function (err) {
        if (err) console.log("erreur de connection à la base de donnée!");
        else console.log("base de donnée connectée !");
    });
};