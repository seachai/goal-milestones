const { MongoClient } = require("mongodb");
const appConfig = require("./app.config");
const Todo = require("./model/Todo.model");

/**
 * MongoDB Class Constructor
 */
class MongoDB {
  constructor() {
    const configOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    // Create a new instance of MongoClient
    this.client = new MongoClient(appConfig.MONGODB_URI, configOptions);
  }
  /**
   * Connect to MongoDB database.
   */
  async init() {
    // Wait for connection to MongoDB
    await this.client.connect();
    console.log("Connected to MongoDB");

    // Setup database and create a new instance of Todo passing in the goals collection
    this.db = this.client.db("goals_app");
    this.collection = this.db.collection("goals");
    // console.log(this.collection);
    // Export the MongoDB client to our model
    this.Todo = new Todo(this.collection);
  }
}

module.exports = new MongoDB();

// const collection = {};
// MongoClient.connect(
//   appConfig.MONGODB_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
//     console.log("Connected to Mongo DB");
//     // Connect to the database
//     let db = client.db("goals_app");
//     // Connect to the collection
//     collection.goals = db.collection("goals");
//   }
// );

// module.exports = collection;
