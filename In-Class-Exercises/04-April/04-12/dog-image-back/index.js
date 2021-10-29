const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.use(express.static("public"));

const endpoint = "https://dog.ceo/api/breeds/image/random";

//routes
app.get("/", (req, res) => {
    res.render("index.ejs", { image: "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg" });
});

app.get("/getImage", (req, res) => {
    fetch(endpoint)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            res.render("error.ejs", {error: "Something broke!"});
        })
        .then((data) => res.render("index.ejs", { image: data.message }))
        .catch((err) => console.log(err));
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
