const express = require("express");
const app = express();

const needle = require("needle");

const logger = require("morgan");
const { render } = require("ejs");
app.use(logger("dev"));

app.set("view engine", "ejs");

const endpoint = "https://deckofcardsapi.com/api/deck/new/draw/?count=5";

app.get("/", (req, res) => {
    res.render("index", {cards: undefined});
});

app.get("/deal", (req, res) => {
    needle.get(endpoint, (error, response) => {
        if (error) {
            console.log("Error trying to get Cards:", error);
            res.status(500).send("Something broke");
        } else {
            console.log(response.body.cards);
            res.status(200).render("index", {cards: response.body.cards});
        }
    });
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
