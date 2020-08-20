const express = require("express");
const app = express();
const path = require("path");
const routes = require("./app.routes");
const logger = require("morgan");
const appConfig = require("./app.config");
const mongoDB = require("./app.database");

/**
 * Template engine configuration.
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

/**
 * Express middle-ware configuration.
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

/**
 * Start Express server.
 */
const startServer = async () => {
  // 1. Connect to MongoDb
  await mongoDB.init();
};
// -- Once connected to MongoDb
// 2. Configure middle-ware routes
// 3. Start listening to request from client
// 4. Else catch an error

startServer()
  .then(() => app.use(routes))
  .then(() =>
    app.listen(appConfig.PORT, () =>
      console.log(`Server is running on port ${appConfig.PORT}.`)
    )
  )
  .catch((err) => console.log(err));
