const express = require("express");
const app = express();

//Import data to pass to EJS
const { data } = require("./data.js");

//Set static directory
app.use(express.static("public"));

//Route
app.get("/", (req, res) => {
    res.render("home.ejs", { data: data });
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});