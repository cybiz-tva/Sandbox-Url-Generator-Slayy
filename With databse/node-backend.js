const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// parse application/json bodies as JSON
app.use(bodyParser.json());

// database to store the questions and generated IDs
const database = new Map();

app.post("/save-question", (req, res) => {
  const { question, dateTime, id } = req.body;

  // save the question and generated ID in the database
  database.set(id, { question, dateTime });

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
