const express = require('express');
const app = express();

// Reuire the data from the data.js file
const {zoo} = require("./data")

// Create a root route handler that sends the data from above to browser
// 1. Test with Postman
// 2. Test with CURL
// 3. Test with the browser
app.get("/", (req, res) => {
    res.send(zoo);
})

// Build a route handler for /names that sends back h1-encased names of all the animals
// Results should be:
                //  "Name: <name of the animal>"
app.get("/names", (req, res) => {
    let result = zoo.map(el => `<h1>Name: ${el.name}</h1>`);
    res.send(result.join(""));
})

// Build a route handler for /types that sends back h1-encased types of all the animals
// Encase the name of the animal in an h2 tag
// Results should be:
                //  "Type of animal: <type of animal>"
                //  "Name: <name of the animal>"
app.get("/types", (req, res) => {
    let result = zoo.map(el => `<h1>Type of animal: ${el.breed}</h1>
                               <h2>Name: ${el.name}</h2>`);
    res.send(result.join(""));
})

// Build a route handler for /owner that sends back h1-encased owner of all the animals
// Encase the name of the animal in an h2 tag
// Results should be:
                //  "Owner: <owner of the animal>"
                //  "Name: <name of the animal>"
app.get("/owner", (req, res) => {
    let result = zoo.map(el => `<h1>Owner of animal: ${el.owner.fname}</h1>
                                <h2>Name: ${el.name}</h2>`);
    res.send(result.join(""));
})

// Build a route handler for /contact that sends back h1-encased name of all the animals
// Encase the owner of the animal in an h2 tag
// Encase the owner's phone number of the animal in an h3 tag
// Results should be:
                //  "Name: <name of the animal>"
                //  "Owner: <owner of the animal>"
                //  "Phone: <phone # of the owner of the animal>"
app.get("/contact", (req, res) => {
    let result = zoo.map(el => `<h1>Owner of animal: ${el.owner.fname}</h1>
                                <h2>Name: ${el.name}</h2>
                                <h3>Phone: ${el.owner.phone}</h3>`);
    res.send(result.join(""));
})

// Build a route handler for /friendly that sends back h1-encased result as follows:
                //  "<name of the animal> will make a good pet: (Yes or No depnding on isPet key)"
app.get("/friendly", (req, res) => {
    let result = zoo.map(el => `<h1>${el.name} will make a good pet: ${el.isPet ? "Yes" : "No"}</h1>`);
    res.send(result.join(""))
})

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`App listening on port: ${port}`));

