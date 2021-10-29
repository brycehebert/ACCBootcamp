const express = require("express");
const app = express();
//use dotenv to hold YELP_API_KEY
require("dotenv").config();
//log with morgan
const logger = require("morgan");
//use yelp-fusion package to make requests
const yelp = require("yelp-fusion");
//initialize yelp-fusion with the api key
const client = yelp.client(process.env.YELP_API_KEY);

app.use(logger("dev"));
//set public folder and view engine
app.use(express.static("public"));
app.set("view engine", "ejs");

//Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/searchresults", (req, res) => {
    //check if the user entered a search term
    if(req.query.searchQuery === "")
        res.render("error", {msg: "You must enter a location."})
    //make request to yelp api. looking for food businesses and limited to 10 results
    client
        .search({ location: req.query.searchQuery, categories: "food", limit: 10 })
        .then((response) => res.render("searchresults", { data: response.jsonBody.businesses }))
        .catch((e) => {
            res.render("error", {msg: "Something broke."});
            console.log(e);
        });
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
