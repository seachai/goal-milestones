require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const uri = process.env.DB_URI;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index");
  console.log(uri);
});

app.post("/post-goal", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
