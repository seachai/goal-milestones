const Todo = require("../model/Todo.model");
// const mongoDB = require("../app.database");

/**
 * Get data from Todo model
 */
exports.getGoals = (req, res) => {
  const todo = new Todo();
  todo
    .getGoals()
    .then((goals) => {
      console.log("Successfully grabbed goals", goals);
      res.render("index", { data: goals });
    })
    .catch((err) => err);
};

/**
 * Post data to Todo model
 */
exports.postGoal = (req, res) => {
  const todo = new Todo();
  todo
    .postGoal(req.body)
    .then((result) => {
      console.log("Successfully posted goal", result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
};

/**
 * Update goal and send to Todo model
 */
exports.updateGoal = async (req, res) => {
  const todo = new Todo();
  todo.updateGoal();
  res.redirect("/");
};

/**
 * Delete goal from Todo model
 */
exports.deleteGoal = async (req, res) => {
  const todo = new Todo();
  todo.deleteGoal();
  res.redirect("/");
};
