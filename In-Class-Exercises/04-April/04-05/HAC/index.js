const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.set("view engine", "ejs");

//Route handlers
app.get("/", (req, res) => {
    res.send("I am the root route.");
});

app.get("/home/:name", (req, res) => {
    res.render("home", {data: req.params.name});
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
