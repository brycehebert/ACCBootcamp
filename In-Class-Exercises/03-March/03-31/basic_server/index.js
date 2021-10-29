//Foundation
const express = require("express");
const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("I am groot.");
});
//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
