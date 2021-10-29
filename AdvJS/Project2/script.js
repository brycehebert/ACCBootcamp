// Getting user input from the CLI was not part of requirements. But I wanted to do it for fun.
const readline = require("readline-sync");

// Ask the user how much they have drank and the ABV of the drink. Storing in drinks object.
let drinks = {
    ounces: readline.questionInt("How many ounces of the beverage have you consumed? "),
    abv: readline.questionFloat("What is the alcohol percentage of the beverage? (Example: Enter 0.05 for 5%) ")
};

// Ask the user their gender. Converting answer to a String.
let gender = readline.keyInSelect(["Male", "Female"], "What is your gender?", { cancel: false }) ? "female" : "male";

// Ask the user what their weight is.
let weight = readline.questionInt("What is your weight in pounds? ");

// Ask the user how many hours since they've stopped drinking.
let time = readline.questionInt("How many hours has it been since you stopped drinking? ");

// Call the calculateBAC function and output result to console.
console.log("Your current blood alcohol content is approximately:", calculateBAC(drinks, gender, weight, time));

function calculateBAC(drinks, gender, weight, time) {
    // Calculate how much alcohol in total has been consumed.
    let totalAlcohol = drinks.ounces * drinks.abv;
    // Determine the appropriate alcohol distribution ratio to use based on gender.
    let alcDistriRatio = gender === "male" ? 0.73 : 0.66;

    // Use the BAC formula to find current approx. BAC.
    // BAC% = (A × 5.14 / W × r) - 0.015 × H
    let bac = ( totalAlcohol * 5.14 / weight * alcDistriRatio) - 0.015 * time;
    // It can't be less than 0.
    if (bac < 0) bac = 0;

    // Return the BAC down to 4 decimal places.
    return bac.toFixed(4);
}
