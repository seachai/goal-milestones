const MongoClient = require("mongodb").MongoClient;
const appConfig = require("./app.config");

// // Db name: goals_app
// // collections: goals
const collection = {};

/**
 * Connect to MongoDB database.
 */
MongoClient.connect(
  appConfig.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    console.log("Connected to Mongo DB");
    let db = client.db("goals_app");
    collection.goals = db.collection("goals");
  }
);

module.exports = collection;
