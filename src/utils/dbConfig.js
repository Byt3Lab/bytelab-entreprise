const dbConfig = {
    devlopement: {
        host : "localhost",
        dbName : "bytelab",
        port: "27017",
        cluster: "mongodb+srv://bytelab:58yKdPsLO1H16CUs@cluster0.sey8k.mongodb.net/bytelab"
    },

    production: {
        host : "",
        dbName : "bytelab",
        port: "",
        cluster: "mongodb+srv://bytelab:58yKdPsLO1H16CUs@cluster0.sey8k.mongodb.net/bytelab"
    }
}

module.exports = dbConfig;