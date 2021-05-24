import { createRequire } from 'module'
const require = createRequire(import.meta.url);
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/";
const dbName = "myapi";
let db;


export const Mongo = MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    const dbo = db.db(dbName);

    console.log("Connected MongoDB: " + url);
    console.log("Database: " + dbName)
});