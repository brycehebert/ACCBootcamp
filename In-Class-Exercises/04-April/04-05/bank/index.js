const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

//Route handlers
app.get("/", (req, res) => {
    res.send("I am the root route.");
});

app.get("/account", (req, res) => {
    res.send("This is a bank account.");
});

app.get("/account/:name", (req, res) => {
    res.send(`This account belongs to ${req.params.name}`);
});

app.get("/account/:name/:num", (req, res) => {
    let { name, num } = req.params;
    res.send(`This account belongs to ${name} and has $${num} in it.`);
});

app.get("/account/name/:name/amount/:num", (req, res) => {
    let { name, num } = req.params;
    let msg = num > 100 ? `${name}, can I borrow $${num / 2}?` : `${name}, do you like living on the edge?`;
    res.send(msg);
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
