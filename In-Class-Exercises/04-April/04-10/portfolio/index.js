const express = require("express");
const app = express();

const {data} = require("./helpers/projectData");

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("root route");
});

app.get("/home", (req, res) => {
    res.render("home", {data: data});
});

app.get("/about", (req, res) => {
    res.render("about");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
