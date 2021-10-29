const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const chalk = require("chalk");

app.get("/", (req, res) => {
    res.send("I am root!");
});

app.get("/shar", (req, res) => {
    res.send("This is Shar's page");
});

app.get("/veggies", (req, res) => {
    res.send("I am the veggies page.");
});

let fruits = ["apple", "banana", "orange", "dragonfruit"];

app.get("/fruit", (req, res) => {
    res.send(fruits);
});

app.get("/fruit/cherries", (req, res) => {
    res.send("I am the cherries page.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(chalk.greenBright(`Listening on port ${port}`)));
