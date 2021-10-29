const express = require("express");
const app = express();

const fetch = require("node-fetch");

//use morgan logger
const logger = require("morgan");
app.use(logger("dev"));

//set view engine and static folder
app.set("view engine", "ejs");
app.use(express.static("public"));

//add commas to num and restrict to 2 decimal places
function truncate(num) {
    return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

//middleware
app.use("/", (req, res, next) => {
    if (req.query.curr) {
        const endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";

        fetch(endpoint)
            .then((response) => response.json())
            .then((json) =>
                res.render("index", {
                    price: truncate(json.bpi[req.query.curr].rate_float),
                    symbol: json.bpi[req.query.curr].symbol
                })
            )
            .catch(() => res.render("error"));
    } else next();
});

//Route
app.get("/", (req, res) => {
    res.render("index", { price: undefined, symbol: undefined });
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
