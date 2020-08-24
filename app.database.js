const { MongoClient } = require("mongodb");
const appConfig = require("./app.config");

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
    this.db = this.client.db("goals_app");
    this.collection = this.db.collection("goals");
    this.completed = this.db.collection("completed");
  }
}

module.exports = new MongoDB();
