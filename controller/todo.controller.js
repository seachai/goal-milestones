const Todo = require("../model/Todo.model");

/**
 * Get data from Todo model
 */
exports.getGoals = (req, res) => {
  const todo = new Todo();
  todo
    .getGoals()
    .then((goals) => {
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
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
};

/**
 * Update goal and send update to MongoDB
 */
exports.updateGoal = async (req, res) => {
  const todo = new Todo();
  todo.updateGoal(req.body);
  res.redirect("/");
};

/**
 * Delete goal from Todo model
 */
exports.deleteGoal = async (req, res) => {
  const todo = new Todo();
  // console.log(req.body);
  todo.deleteGoal(req.body);
  // res.redirect("/");
  res.end();
};
