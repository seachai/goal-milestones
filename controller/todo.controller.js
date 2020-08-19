const Todo = require("../model/Todo.model");

/**
 * Get data from Todo model
 */
exports.getGoal = (req, res) => {
  Todo.getGoal();
  res.render("index");
};

/**
 * Post data to Todo model
 */
exports.postGoal = async (req, res) => {
  try {
    console.log(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(errror.message);
  }
};
