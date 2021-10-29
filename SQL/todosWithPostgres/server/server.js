const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("../client"));

// NOTE: HOW TO CONVERT TO POSTGRES
// 1) Build our connection
//    a) install PG
//    b) connect

// Connection

//Postgres client
const { Client } = require("pg");

//How to connect to postgres
const connectionObject = {
    host: "pgdb.accsoftwarebootcamp.com",
    port: 5432,
    database: "acc",
    user: "acc",
    password: "accrocks"
};

//Creates a connection
const conn = new Client(connectionObject);

conn.connect()
    .then(() => {
        console.log("Connected to the Postgres database: " + connectionObject.database);
    })
    .catch((err) => {
        console.log("Failed to connect to pgdb");
    });

// Read - GET
app.get("/todos", (req, res) => {
    let query = `
    SELECT 
        todo_id,
        todo_id AS "_id",
        description,
        is_complete AS "isComplete"
    FROM hr.todos;`;
    conn.query(query)
        .then((todos) => {
            console.log(todos.rows);
            res.status(200).json(todos.rows);
        })
        .catch((err) => {
            console.log("Failed to get todos: " + err);
            res.end();
        });
});

// Create - POST
app.post("/todos", (req, res) => {
    let newTodo = req.body.description;
    if (!newTodo) {
        res.status(400).send("Please send a valid todo");
    } else {
        let queryStr = `
          INSERT INTO hr.todos
          (description, is_complete, user_id)
          VALUES('${newTodo}', false, 2)
          RETURNING *;
          `;
        conn.query(queryStr)
            .then((todos) => {
                console.log(todos.rows);
                todos.rows[0]._id = todos.rows[0].todo_id;
                res.status(201).json(todos.rows[0]);
            })
            .catch((err) => {
                console.log("Error occurred on INSERT query:", err);
                res.status(404).send("Failed to create new ToDo");
            });
    }
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
    let requestedTodoId = req.params.id;

    let queryStr = `
        UPDATE hr.todos
        SET is_complete = NOT is_complete
        WHERE todo_id = ${requestedTodoId}
        RETURNING *;
        `;
    conn.query(queryStr)
        .then((todo) => {
            console.log(todo.rows);
            res.status(200).json(todo.rows[0]);
        })
        .catch((err) => {
            console.log("Error trying to UPDATE todo:", err);
            res.status(404).send("Failed to update ToDo");
        });
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
    let requestedTodoId = req.params.id;

    let queryStr = `
      DELETE FROM hr.todos
      WHERE todo_id = ${requestedTodoId}
      RETURNING *;
      `;

    conn.query(queryStr)
        .then((todo) => {
            console.log(todo.rows);
            res.status(200).json(todo.rows[0]);
        })
        .catch((err) => {
            console.log("Error trying to DELETE todo:", err);
            res.status(404).send("Failed to delete ToDo");
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));
