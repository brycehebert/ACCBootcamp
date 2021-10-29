const express = require("express");
const app = express();
const logger = require("morgan");
const fetch = require("node-fetch");

app.use(logger("dev"));
app.use(express.static("public"));
app.set("view engine", "ejs");

//get the data used for the initial drink
const { initDrink } = require("./initDrink.js");

//endpoint to get a random drink recipe from TheCocktailDB api
const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

//Routes

//landing page will use the initial drink to render page
app.get("/", (req, res) => {
    initDrink.ingredients = getIngredients(initDrink);
    res.render("home", { data: initDrink });
});

//use fetch to get a random drink
app.get("/getDrink", (req, res) => {
    fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
            data = json.drinks[0];
            data.ingredients = getIngredients(data);
            res.render("home", { data });
        })
        .catch(() => res.render("error"));
});

//catch all other routes
app.get("*", (req, res) => {
    res.render("error")
})

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//grab the data we need for each ingredient in the drink
function getIngredients(drink) {
    //data will be stored in an array to be added to the other data
    ingredients = [];

    const imageBaseURL = "https://www.thecocktaildb.com/images/ingredients/";

    //look at each ingredient and grab the name, measurement, and build image URLs
    for (let i = 1; drink[`strIngredient${i}`]; i++) {
        let currentIngredient = drink[`strIngredient${i}`];
        let ingThumb = `${imageBaseURL}${currentIngredient}-small.png`;
        let ingText = drink[`strMeasure${i}`] ? drink[`strMeasure${i}`] + " " + currentIngredient : currentIngredient;

        //put the measurements and thumbnail URL in an object and push it to the array.
        ingredients.push({ ingText, ingThumb });
    }
    return ingredients;
}
