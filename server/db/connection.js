const MongoClient = require('mongodb').MongoClient;
const db = require('../config/keys').mongoURI;
const uri = db;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;