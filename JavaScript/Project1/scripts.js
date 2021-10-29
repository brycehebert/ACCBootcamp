let person = prompt("Please enter your name");
let food = prompt("What is your favorite snack?");
let drink = prompt("What is your favortie drink?");

let msg = document.querySelector("p");

msg.innerHTML = `Hi there ${person}, it appears that you enjoy eating ${food} and drinking ${drink}!`;