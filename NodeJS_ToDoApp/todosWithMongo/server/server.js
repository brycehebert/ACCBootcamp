const express = require("express");
const app = express();

//Logging
const logger = require("morgan");
app.use(logger("dev"));

//Express setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../client"));

//Get reference to the model to be used.
const { ToDoModel } = require("./schema");

// 3) Build queries
//    a) Read with Mongoose
//    b) Create with Mongoose
//    c) Delete with Mongoose
//    d) Update with Mongoose

// Read - GET
app.get("/todos", (req, res) => {
    ToDoModel.find({}, (err, results) => {
        if (err) {
            console.log("Error getting data from database:", err);
        } else {
            console.log("Success", results);
            res.status(200).json(results);
        }
    });
});

// Create - POST
app.post("/todos", (req, res) => {
    let newTodo = new ToDoModel({
        description: req.body.description
    });

    newTodo.save((err, todo) => {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Success", todo);
            res.status(201).json(todo);
        }
    });
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
    let requestedTodoId = req.params.id;
    ToDoModel.findByIdAndDelete(requestedTodoId, (err, result) => {
        if (err) {
            console.log("Error deleting from db:", err);
        } else {
            console.log("Deleted: ", result);
            res.json(result);
        }
    });
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
    let requestedTodoId = req.params.id;

    ToDoModel.findById(requestedTodoId, (err, result) => {
        if (err) {
            console.log("Error updating", err);
        } else {
            result.isComplete = !result.isComplete;
            result.save((err, updated) => {
                if (err) {
                    console.log("Error saving updated doc", err);
                } else {
                    console.log("Updated: ", updated);
                    res.status(200).json(updated);
                }
            });
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));
