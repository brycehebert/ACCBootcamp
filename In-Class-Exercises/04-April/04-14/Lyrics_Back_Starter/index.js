const express = require("express");
const app = express();

const request = require("request");

const chalk = require("chalk");
const logger = require("morgan");
app.use(logger("dev"));
app.use(express.static("public"));

app.set("view engine", "ejs");

//https://api.lyrics.ovh/v1/Nine Inch Nails/Hurt
const baseURL = "https://api.lyrics.ovh/v1";

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/getLyrics", (req, res) => {
    let { title, artist } = req.query;
    let endpoint = `${baseURL}/${artist}/${title}`;

    request(endpoint, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body).lyrics.replace(/\n/g, "<br>");
            res.render("results", { data, title, artist });
        } else {
            res.render("error", { error: "No Lyrics Found" });
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(chalk.blue(`App on port: ${chalk.green(port)}`)));
