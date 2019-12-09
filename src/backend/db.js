const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = "mongodb://localhost:27017";
const url2 = process.env.NODE_ENV = 'production' ?
    process.env.DB_URL_PRD :
    process.env.DB_URL_DEV;
const dbName2 = url2.substr(url2.lastIndexOf('/') + 1);
const dbName = 'sport'

module.exports = { connect };

function connect() {
    return new Promise((resolve) => {
        MongoClient.connect(url2, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, mongoDB) {
            if (err) throw err;
            const dbo = mongoDB.db(dbName2);
            resolve(dbo); 
          });
    });
}