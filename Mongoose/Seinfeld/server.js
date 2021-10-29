const express = require("express");
const app = express();
const logger = require("morgan");

const keys = require("./config/keys");
const mongoose = require("mongoose");
mongoose
    .connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Cannot connect to DB"));

let userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

let UserModel = mongoose.model("Bryce_user", userSchema);

let User = new UserModel({
    name: "Kramer",
    age: 47,
    email: "CosmoKramer@gmail.com"
});

User.save((err, user) => {
    if (err) {
        console.log("Error");
    } else {
        console.log(user);
    }
});

UserModel.create({ name: "Elaine", age: 39, email: "ElaineBenes@gmail.com" }, (err, user) => {
    console.log(err ? "Error Creating Document" : "User Created: " + user);
});

app.use(logger("dev"));

app.get("/", (req, res) => {
    res.send("Hello");
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
