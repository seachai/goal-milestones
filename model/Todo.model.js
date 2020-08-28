const mongoDB = require("../app.database");
const ObjectId = require("mongodb").ObjectID;

class Todo {
  constructor(data) {
    this.data = data;
    this.goals = mongoDB.collection;
  }
  /**
   * Get data from database collection
   */
  getGoals() {
    return new Promise((resolve, reject) => {
      this.goals
        .find({})
        .toArray()
        .then((goals) => {
          if (goals) {
            resolve(goals);
          }
        })
        .catch((err) => reject(err));
    });
  }

  /**
   * Post data to database collection
   */
  postGoal(postReq) {
    return new Promise((resolve, reject) => {
      if (postReq) {
        this.goals
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
      this.goals
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
   * Change complete to true in the database
   */
  completeGoal(completeReq) {
    return new Promise((resolve, reject) => {
      this.goals
        .findOneAndUpdate(
          {
            _id: new ObjectId(completeReq.id)
          },
          {
            $set: { completed: true }
          }
        )
        .then(() => {
          resolve();
        })
        .catch((err) => reject(err));
    });
  }

  /**
   * Delete data from database collection
   */
  deleteGoal(deleteReq) {
    return new Promise((resolve, reject) => {
      this.goals
        .findOneAndDelete({
          _id: new ObjectId(deleteReq.id)
        })
        .then(() => {
          resolve();
        })
        .catch((err) => reject(err));
    });
  }
}

module.exports = Todo;
