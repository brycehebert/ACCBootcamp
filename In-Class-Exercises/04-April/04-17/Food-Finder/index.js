const express = require("express");
const app = express();
require("dotenv").config();
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.YELP_API_KEY);
const logger = require("morgan");

app.use(logger("dev"));
app.use(express.static("public"));
app.set("view engine", "ejs");

//Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/locationSearch", (req, res) => {
    client
        .search({
            location: req.query.locale,
            limit: 10
        }).then((response) => {
            const results = response.jsonBody.businesses;
            res.render("results", { data: results });
        }).catch((e) => console.log(e));
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
