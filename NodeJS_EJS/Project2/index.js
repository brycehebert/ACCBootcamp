const express = require("express");
const app = express();

//An arry to be passed to EJS
let messages = [
    { name: "Jim", message: "I'm a cartoonist." },
    { name: "Jane", message: "How about pasta for dinner?" },
    { name: "Gary", message: "I like my pasta with butter." }
];

//Route
app.get("/", (req, res) => {
    res.send(`Try <a href="/messages">/messages</a>`);
})

app.get("/messages", (req, res) => {
    res.render("messages.ejs", { messages: messages });
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
