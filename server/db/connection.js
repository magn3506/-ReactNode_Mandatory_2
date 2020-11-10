const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGO_DB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;