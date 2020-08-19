const db = require("../app.database");

class Todo {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }

  /**
   * Get data from database collection
   */
  getGoal() {
    console.log(db.goals);
  }

  /**
   * Post data to database collection
   */
  postGoal() {
    console.log("Posted");
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

module.exports = new Todo();
