const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(bodyParser.json());

// Array to store the saved questions in memory (for simplicity)
const questions = [];

app.post("/", (req, res) => {
  const { question, dateAndTime } = req.body;

  // Save the question and date/time in the questions array
  questions.push({ question, dateAndTime });

  res.send({ message: "Question saved successfully" });
});
