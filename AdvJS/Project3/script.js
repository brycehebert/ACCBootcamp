const { myPets } = require("./pets.js");
//myPets.sort((a, b) => a["daily food quantity"] - b["daily food quantity"]);

//Insertion Sort

let i, current, j;

for (i = 1; i < myPets.length; i++){
    current = myPets[i];
    j = i - 1;

    while (j >= 0 && myPets[j]["daily food quantity"] > current["daily food quantity"]) {
        myPets[j + 1] = myPets[j];
        j--;
    }

    myPets[j + 1] = current;
}

console.log(myPets);