const express = require("express");
const app = express();

//some variables to be passed to EJS
let pizza = "I like my pizza with extra pineapples.";
let cappuccino = "I like my cappuccinos to be sweet.";
let fries = "I like my fries crispy with extra salt.";

//Routes
app.get("/", (req, res) => {
    res.render("home.ejs", { pizza: pizza });
});
app.get("/about", (req, res) => {
    res.render("about.ejs", { cappuccino: cappuccino });
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs", { fries: fries });
});

//Listener
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});