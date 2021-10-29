// Require express and initialize it
const express = require("express");
const app = express();

// Declare a port variable
const port = process.env.PORT || 3000;

// Require socket.io and pass the server object to it
const io = require("socket.io")(
  app.listen(port, () => {
    console.log("App is running on " + port);
  })
);

// Tell our app to use our client folder as static code
app.use(express.static("client"));
// Set up a home route and send the client folder
app.get("/", (req, res) => {
  res.send("index.html");
});

// Create a socket io connection and handle emissions
// that are received or to be sent out
io.on("connection", (socket) => {
  console.log("A new user joined");

  socket.on("New User", (nickname) => {
    console.log("New User Added:", nickname);
    io.emit("New User", nickname);
  });

  socket.on("New Message", (newMessage) => {
    console.log(newMessage);
    io.emit("New Message", newMessage);
  })
});
