const mongoDB = require("../app.database");

class Todo {
  constructor(data) {
    this.data = data;
  }

  /**
   * Get data from database collection
   */
  getGoals() {
    return new Promise((resolve, reject) => {
      const goals = mongoDB.collection;
      goals
        .find({})
        .toArray()
        .then((goals) => {
          if (goals) {
            resolve(goals);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   * Post data to database collection
   */
  postGoal(postReq) {
    return new Promise((resolve, reject) => {
      if (postReq) {
        const goals = mongoDB.collection;
        goals
          .insertOne({
            goal: postReq.goal,
            completed: false,
            createdAt: new Date()
          })
          .then(() => {
            console.log(
              `INSERTED ${postReq} into ${this.collection} successfully.`
            );
            resolve();
          })
          .catch((err) => reject(err));
      }
    });
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
