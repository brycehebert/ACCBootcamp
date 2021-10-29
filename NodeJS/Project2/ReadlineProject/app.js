const readLine = require("readline-sync");

//use readline-sync to capture answers to 3 questions
let name = readLine.question("What is your name? ");
let food = readLine.question("What is your favorite food? ");
let drink = readLine.question("What is your favorite drink? ");
//output a message using the user input
console.log(`\nHello, ${name}! Your favorite food is ${food} and your favorite drink is ${drink}!`);

const spiceLevel = ["spicy", "very spicy", "so spicy, you won't be able to feel your face"];
//show user the 3 spice levels available and capture their response
let i = readLine.keyInSelect(spiceLevel, "How spicy would you like your tacos?", { cancel: false });
//confirm spice level
if (readLine.keyInYN(`Ok, so you want your tacos to be ${spiceLevel[i]}. Are you sure about this?`)) {
    console.log("Ok, we will have your order right out.");
} else {
    console.log("What's the matter? Can't handle the heat?");
}
