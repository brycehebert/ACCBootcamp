const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const key = require("./config/keys").mongoURI;
mongoose
  .connect(key, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

let Message = require("./models/message");

app.post("/message", (req, res) => {
  let { body } = req;
  let newMessage = new Message({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phone: body.phone,
    message: body.message
  });

  newMessage.save((err, response) => {
    err ? res.status(500).send("failed to save data") : res.status(200).send(response);
  });
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
