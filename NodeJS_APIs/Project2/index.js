const express = require("express");
const app = express();
const fetch = require("node-fetch");

//use dotenv to hide api key
//requires file called ".env" in root of project
//.env file contains API_KEY=<tmdb api key>
require("dotenv").config();

//use morgan logger
const logger = require("morgan");
app.use(logger("dev"));

//set view engine and static folder
app.set("view engine", "ejs");
app.use(express.static("public"));

//URL variables
const apiKey = `?api_key=${process.env.API_KEY}`;
const endpoint = "https://api.themoviedb.org/3/";

//Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/nowplaying", (req, res) => {
    const nowPlaying = `${endpoint}movie/now_playing${apiKey}&language=en-US&page=1&region=US`;
    fetch(nowPlaying)
        .then((response) => response.json())
        .then(({ results }) => res.render("nowplaying", { results: results }))
        .catch(() => res.send("something went wrong"));
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
