let pets = ["Moxxi", "Pickles", "Hootchie"];

let newPets = ["Bear", "Monkeybutt"];

function addPets(arr1, arr2) {
    let petArray = arr1.concat(arr2);

    petArray.forEach(function(el) {
        if (el.length > 5) {
            console.log(el);
        } else if (el.length === 5) {
            console.log("I am 5: ", el);
        } else {
            console.log("Too short");
        }
    });
}

addPets(pets, newPets);

var numbers = [4, 9, 16, 25];
var squareRoots = numbers.map(Math.sqrt);

var multiply = numbers.map(function(el){
        return el * 5;
    });

var words = ["spray", "limit", "elite" , "exuberant", "destruction", "present"];

var longWords = words.filter(function(thisWord){
    return thisWord.length > 6;
});

var pets = ["Moxxi", "Pickle", "Hootchie", "Monkeybutt"];
console.log(pets.sort());

var numbers = [10, 1, 21, 2];
console.log(numbers.sort(function(a, b){return a-b}));

var things = ["word", "Word", "1 Word", "2 Word"];
console.log(things.sort());

var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a-b}));