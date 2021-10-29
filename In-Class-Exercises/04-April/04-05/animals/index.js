const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

//Route handlers
app.get("/", (req, res) => {
    res.send("I am the root route.");
});

app.get("/animals", (req, res) => {
    res.send("I like animals.");
});

app.get("/animals/dogs", (req, res) => {
    res.send("I like dogs.");
});

app.get("/animals/cats", (req, res) => {
    res.send("I like cats.");
});

app.get("/animals/:like/:dislike", (req, res) => {
    res.send(`I like ${req.params.like}, but I do not like ${req.params.dislike}.`);
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
