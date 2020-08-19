const express = require("express");
const app = express();
const path = require("path");
const routes = require("./app.routes");
const logger = require("morgan");
const appConfig = require("./app.config");

/**
 * Template engine configuration.
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

/**
 * Express configuration.
 */
app.use(logger("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

/**
 * Config routes.
 */
app.use(routes);

/**
 * Start Express server.
 */
app.listen(appConfig.PORT, () =>
  console.log(`Server is running on port ${appConfig.PORT}.`)
);
