const animals = require("animals");
const logPets = require("log.pets");

//print random animal
console.log("Random animal:", animals());
//print a lion
logPets.lion();
//print the zoo with 3 random animals
logPets.zoo(animals(), animals(), animals());
//# of animals in generator
console.log("Total animals available:", animals.words.length);
//Number of animals starting with 'G'
let animalsWithG = animals.words.filter((el) => el.substr(0, 1).toUpperCase() === "G");
console.log("Animals that start with 'G':", animalsWithG.length || "No matches found");
