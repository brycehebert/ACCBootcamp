const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
const logger = require("morgan");

app.use(logger("dev")); //logging
app.use(express.urlencoded({ extended: false })); //parse application/x-www-form-urlencoded
app.use(express.json()); //parse application/json
app.use(express.static("../client"));

let { toDoArray } = require("./fake-data");

let newId = 4;

//Routes
app.get("/", (req, res) => {
    res.send("hello");
});

//Read - GET
app.get("/todos", (req, res) => {
    res.json(toDoArray);
});

//GET a specific todo
app.get("/todos/:id", (req, res) => {
    let requestedTodo = Number(req.params.id);
    let foundTodo = toDoArray.find(el => el.id === requestedTodo);

    res.status(200).json(foundTodo);
});

//Create - POST
app.post("/todos", (req, res) => {
    let newTodo = { id: newId++, description: req.body.description, isComplete: false };
    toDoArray.push(newTodo);
    res.status(200).json(newTodo);
});

//Delete - DELETE
app.delete("/todos/:id", (req, res) => {
    let id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400).send("Please send a number ID");
        return;
    }

    let index = toDoArray.findIndex((el) => el.id === id);
    if (index === -1) {
        res.status(400).send("ID does not match any entries");
        return;
    }

    toDoArray.splice(index, 1);``
    res.status(200).json(toDoArray);
});

//Update - PUT
app.put("/todos/:id", (req, res) => {
    let id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400).send("Please send a number ID");
        return;
    }

    let toDo = toDoArray.find((el) => el.id === id);
    if (toDo === undefined) {
        res.status(400).send("ID does not match any entries");
        return;
    }

    toDo.isComplete = !toDo.isComplete;
    res.status(200).json(toDo);
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
