//Get references to DOM
const drinkImage = document.getElementsByClassName("drink-image")[0];
const drinkTitle = document.getElementsByClassName("drink-title")[0];
const drinkBtn = document.getElementsByClassName("new-drink-btn")[0];
const drinkIngredientsList = document.getElementsByClassName("ingredients")[0];
const drinkInstructions = document.getElementsByClassName("instructions")[0];

//endpoint to get a random cocktail
const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

//even listener fetches the random drink
drinkBtn.addEventListener("click", () => {
    fetch(endpoint)
        .then((response) => response.json())
        .then((json) => showDrink(json.drinks[0]))
        .catch((e) => console.log("Error in fetch", e));
});

function showDrink(data) {
    //change the main drink image
    drinkImage.setAttribute("src", data.strDrinkThumb);
    drinkImage.setAttribute("alt", `Photo of ${data.strDrinkThumb}`);
    //change the name of the drink
    drinkTitle.innerHTML = data.strDrink;

    //show the ingredients
    buildIngredientList(data);

    //show the instructions
    drinkInstructions.innerHTML = data.strInstructions;
}

function buildIngredientList(data) {
    //reset the ingredients list
    drinkIngredientsList.innerHTML = "";
    const imageBaseURL = "https://www.thecocktaildb.com/images/ingredients/";

    //build the div elements containing each ingredient
    for (let i = 1; data[`strIngredient${i}`]; i++) {
        //easier reference to the current ingredient data
        let currentIngredient = data[`strIngredient${i}`];

        //the main div for the ingredient
        let ingredient = document.createElement("div");
        ingredient.classList.add("ingredient-thumbnail", "text-center");

        //the image of the ingredient
        let ingImage = document.createElement("img");
        ingImage.setAttribute("src", `${imageBaseURL}${currentIngredient}-small.png`);

        //the text of the ingredient
        let ingText = document.createElement("p");

        // make sure there's a measurement for each ingredient 
        if (data[`strMeasure${i}`]) {
            ingText.innerHTML = data[`strMeasure${i}`] + " " + currentIngredient;
        } else {
            ingText.innerHTML = currentIngredient;
        }

        //add image and text as children of the main div
        ingredient.appendChild(ingImage);
        ingredient.appendChild(ingText);

        //add the new ingredient to the list on the page
        drinkIngredientsList.appendChild(ingredient);
    }
}
