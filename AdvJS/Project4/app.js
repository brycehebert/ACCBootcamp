const express = require("express");
const app = express();

const logger = require("morgan");

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("home");
});

app.post("/submit", (req, res) => {
    console.log(req.body.inputFname);
    res.render("submit", {data: req.body});
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
