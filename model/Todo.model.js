class Todo {
  constructor(db) {
    this.collection = db;
  }

  /**
   * Get data from database collection
   */
  getGoals() {
    const goalCollection = this.collection;
    return goalCollection;
  }

  /**
   * Post data to database collection
   */
  async postGoal(postReq) {
    await console.log(postReq);
    // let newGoal = await this.collection.insertOne(postReq);
    // console.log(`INSERTED ${postReq} into ${this.collection} successfully.`);
    // return newGoal;
  }

  /**
   * Post data to database collection
   */
  updateGoal() {
    console.log("Updated");
  }

  /**
   * Delete data from database collection
   */
  deleteGoal() {
    console.log("Deleted");
  }
}

module.exports = Todo;
