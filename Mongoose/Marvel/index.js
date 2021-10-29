const express = require("express");
const app = express();
const logger = require("morgan");

app.use(logger("dev"));

//MongoDB Connection
const keys = require("./config/keys");
const mongoose = require("mongoose");
mongoose
    .connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Cannot connect to DB"));

//Marvel Characters Schema
let marvelSchema = mongoose.Schema({
    alias: { type: String, required: [true, "Character Alias is Required"] },
    fname: { type: String, default: "Not Specified" },
    lname: { type: String, default: "Not Specified" },
    nemesis: { type: String, default: "Not Specified" },
    isHero: { type: Boolean, default: true },
    createdOn: { type: Date, default: Date.now() },
    isAlive: { type: Boolean, default: true }
});

//Marvel Characters Model
let MarvelModel = mongoose.model("bryce_character", marvelSchema);

let cap = new MarvelModel({
    alias: "Captain America",
    fname: "Steve",
    lname: "Rogers",
    nemesis: "Red Skull"
});

cap.save((err, character) => {
    err ? console.log("Error adding Character") : console.log(`Character added: ${character}`);
});

//Routes
app.get("/", (req, res) => {
    res.send("Hello");
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
