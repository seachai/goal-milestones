const express = require("express");
const router = express.Router();
const todo = require("./controller/todo.controller");

/**
 * Register routes.
 */
router.get("/", todo.getGoals);

/**
 * Todo
 */
router.post("/post", todo.postGoal);
router.post("/update-item", todo.updateGoal);
router.put("/post", todo.updateGoal);
router.delete("/post", todo.deleteGoal);

/**
 * User Login
 */

module.exports = router;
