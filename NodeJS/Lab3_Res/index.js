const express = require("express");
const app = express();

const chalk = require("chalk");

const logger = require("morgan");
app.use(logger("dev"));

const pokemon = require("pokemon");

// Using your browser and dev tools -
// find what content type is being returned for each othe following

// 1. Build a root route handler that returns "Root route"

app.get("/", (req, res) => {
    res.send("Root Route.");
});

// 2. Build a route handler for /text that sends text - "I am the text route"
app.get("/text", (req, res) => {
    //res.send("I am the text route.")
    console.log("I am the text route");
    res.end("I am ending.");
});

// 3. Build a route handler for /json that returns json stating - 'I am the json route.'
app.get("/json", (req, res) => {
    res.json("I am the JSON route.");
});
// 4. Build a route for /test that redirects the user back to the root route
app.get("/test", (req, res) => {
    res.redirect("/");
});

// 5. Using the pokemon module, and previous demos -
// a. Build a route handler for /pokemon
// b. Build an array of 5 random pokemon
// c. Using the map method, create a new array of pokemon encased in <p> tags
// d. Send your array of <p> tag-encased pokemon to the browser using `Here are my Pokemon: ${result}.`
app.get("/pokemon", (req, res) => {
    let party = [];
    for (let i = 0; i < 6; i++) {
        party.push(pokemon.random());
    }
    let wrappedParty = party.map(el => `<p>${el}</p>`);
    res.send(wrappedParty.join(""));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(chalk.blue(`Listening on port ${chalk.bgWhite.red(port)}`)));
