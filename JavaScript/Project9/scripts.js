function Recipe(name, servings, ingredients) {
    this.name = name;
    this.servings = servings;
    this.ingredients = ingredients;
}

// Unhide the recipe form when btn-new-recipe is clicked
document.getElementById("btn-new-recipe").addEventListener("click", function (){
    document.getElementById("new-recipe-form").classList.remove("d-none");
});

// Add new input field for ingredients when btn-add-ingredient is clicked
document.getElementById("btn-add-ingredient").addEventListener("click", function(event){
    event.preventDefault();

    // Create element to be added
    // Element - <input type="text" class="form-control mb-1" name="input-ingredient">
    let input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control", "mb-1");
    input.name = "input-ingredient";

    // Append new element to list
    document.getElementById("list-ingredients").appendChild(input);
});

// Handle form submission
document.getElementById("form-submit").addEventListener("submit", function(event){
    event.preventDefault();

    // Grab all the form data
    const data = new FormData(event.target);
    const recipeName = data.get("input-name");
    const numServings = data.get("input-servings");
    const ingredients = data.getAll("input-ingredient");

    // Create new Recipe Object
    let recipe = new Recipe(recipeName, numServings, ingredients);

    // Add the recipe
    addRecipeBox(recipe);

    // Hide and reset the form
    document.getElementById("new-recipe-form").classList.add("d-none");
    this.reset();

    // Reset the ingredients list to 1 item
    let list = document.getElementById("list-ingredients");
    while (list.children.length > 1){
        list.removeChild(list.lastChild);
    }
});

// TODO: Form Validation
function validateInput(form) {
    
}

// Creates the new HTML element and appends the recipe to the bottom of list
function addRecipeBox(recipe) {
    // Clone html template
    let newRecipe = document.getElementById("template-recipe").content.firstElementChild.cloneNode(true);
    
    // Set all items for the new recipe to be added
    newRecipe.querySelector(".recipe-title").innerHTML = recipe.name;
    newRecipe.querySelector(".servings-title").innerHTML += recipe.servings;
    newRecipe.querySelector(".ingredients-list").innerHTML += buildList(recipe.ingredients);
    
    // Append the new recipe
    document.querySelector(".container").appendChild(newRecipe);
}

// returns string with new ingredients list items
function buildList(ingredients) {
    let list = "";

    for (let x of ingredients){
        list += `<li>${x}</li>`;
    }
    return list;
}