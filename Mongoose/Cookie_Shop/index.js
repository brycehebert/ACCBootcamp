const express = require("express");
const app = express();
const logger = require("morgan");

app.use(logger("dev"));

const keys = require("./config/keys");
const mongoose = require("mongoose");
mongoose
    .connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Cannot connect to DB"));

let cookieSchema = mongoose.Schema({
    flavor: String,
    price: Number,
    isTasty: Boolean
});

let CookieModel = mongoose.model("Bryce_product", cookieSchema);

let ChocolateCookie = new CookieModel({
    flavor: "Chocolate chip",
    price: 1.99,
    isTasty: true
});

let RaisinCookie = new CookieModel({
    flavor: "Raisin",
    price: 2.49,
    isTasty: false
});

CookieModel.create({ flavor: "Sugar", price: 1.99, isTasty: true }, (err, cookie) => {
    console.log(err ? "Problem adding document" : "Cookie added" + cookie);
});

ChocolateCookie.save((err, cookie) => {
    if (err) {
        console.log("Error");
    } else {
        console.log(cookie);
    }
});

RaisinCookie.save((err, cookie) => {
    if (err) {
        console.log("Error");
    } else {
        console.log(cookie);
    }
});

CookieModel.find({isTasty: true}, (error, cookies) => {
    if (error) {
        console.log("Error");
    } else {
        console.log(cookies);
    }
});

app.get("/", (req, res) => {
    res.send("Hello");
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
