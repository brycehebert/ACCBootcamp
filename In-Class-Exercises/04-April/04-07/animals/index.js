const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Root Route");
});

app.get("/animals", (req, res) => {
    res.render("animals");
});

app.get("/demo/:animal", (req, res) => {
    res.render("demo", { animal: req.params.animal });
});

app.get("/demo2", (req, res) => {
    const animals = ["Doge", "Cat", "Snek", "Moose"];
    res.render("demo2", { animals });
});

app.get("/test/animals", (req, res) => {
    const animals = [
        {
            breed: "dog",
            name: "Spike"
        },
        {
            breed: "cat",
            name: "Mr Tabby"
        },
        {
            breed: "bird",
            name: "Tweety"
        }
    ];
    res.render("demo3", { animals });
});

app.get("*", (req, res) => {
    res.render("error");
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
