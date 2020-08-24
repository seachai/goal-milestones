const mongoDB = require("../app.database");
const ObjectId = require("mongodb").ObjectID;

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
            resolve();
          })
          .catch((err) => reject(err));
      }
    });
  }

  /**
   * Update goal by using ObjectId to reference the goal, then replace it.
   */
  updateGoal(updateReq) {
    return new Promise((resolve, reject) => {
      const goals = mongoDB.collection;
      goals
        .findOneAndUpdate(
          {
            _id: new ObjectId(updateReq.id)
          },
          {
            $set: { goal: updateReq.goal }
          }
        )
        .then(() => {
          resolve();
        })
        .catch((err) => reject(err));
    });
  }

  findGoal() {
    return new Promise((resolve, reject) => {});
  }

  /**
   * Delete data from database collection
   */
  deleteGoal() {
    console.log("Deleted");
  }
}

module.exports = Todo;
