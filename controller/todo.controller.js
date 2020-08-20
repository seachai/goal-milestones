const Todo = require("../model/Todo.model");

/**
 * Get data from Todo model
 */
exports.getGoals = (req, res) => {
  const todo = new Todo();
  console.log(todo.getGoals());
  res.render("index");
};

/**
 * Post data to Todo model
 */
exports.postGoal = async (req, res) => {
  const todo = new Todo();
  const addGoal = await todo.postGoal(req.body);
  res.redirect("/");
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
