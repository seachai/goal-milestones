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

/*
Edit and update goal
When press edit, we will send the ObjectId to the database and find the document that matches the ObjectId
A prompt will open and prefill the form with the document text
When you press ok, we will send the updated form to replace the ObjectId in the database
If you press cancel, nothing will happen since it returns null and no data will change

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
  todo.deleteGoal();
  res.redirect("/");
};
