const express = require("express");
const cors = require('cors');
const app = express();

if (process.env.NODE_ENV=== "dev" || process.env.NODE_ENV=== "test") {
  const logger = require("morgan");
  app.use(logger("dev"));
}

// NOTE: when sending data to server as a POST request, you MUST use
// these two lines of code. Unless you can guarantee HOW the data will be sent:
// through url or as json, it is best to have both lines to be safe.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// allows us to pretend our data is coming from outise our app
const { toDoArray } = require("./fakeData");

// enables us to 'start' the front end by going to localhost:3000 in browser
// grabs the index.html and opens it up
app.use(express.static("../client"));

// Read - GET
app.get("/todos", (req, res) => {
  res.status(200).json(toDoArray);
});

// used temp for creating a a unique idea
let newId = 4;

// Create - POST
app.post("/todos", (req, res) => {
  let newTodo = {
    id: newId++,
    description: req.body.description,
    isComplete: false,
  };
  toDoArray.push(newTodo);
  res.status(201).json(newTodo);
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let requestedTodoId = parseInt(req.params.id);
  let requestedTodoIndex = toDoArray.findIndex((todo) => {
    return todo.id === requestedTodoId;
  });
  toDoArray.splice(requestedTodoIndex, 1);
  res.json(toDoArray);
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedTodoId = parseInt(req.params.id);
  let requestedTodo = toDoArray.find((todo) => {
    return todo.id === requestedTodoId;
  });
  requestedTodo.isComplete = !requestedTodo.isComplete;
  res.json(requestedTodo);
});

app.get("/", (req, res) => {
  res.status(200).send("Root Route")
})

const port = process.env.PORT || 3000;

module.exports = app;

app.listen(port, () => console.log(`App on port ${port}`));
