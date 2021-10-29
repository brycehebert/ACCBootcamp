const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

//Route handlers
app.get("/", (req, res) => {
    res.send("I am the root route.");
});

app.get("/fruit", (req, res) => {
    res.send("Fruits are good for you.");
});

app.get("/fruit/:fruits", (req, res) => {
    res.send(`I like ${req.params.fruits}.`);
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
