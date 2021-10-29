const express = require("express");
const app = express();

//Routes
app.get("/", (req, res) => {
    res.render("home.ejs", { title: "Home" });
});
app.get("/about", (req, res) => {
    res.render("about.ejs", { title: "About" });
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs", { title: "Contact" });
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
