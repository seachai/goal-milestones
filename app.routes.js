const express = require("express");
const router = express.Router();

const todo = require("./controller/todo.controller");

/**
 * Register routes.
 */
router.get("/", todo.getGoal);

/**
 * Todo
 */
router.post("/post", todo.postGoal);

module.exports = router;
