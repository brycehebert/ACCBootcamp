var examples = ['APPLE', 'Apple Cider', '   applesauce', 'apple pie', 'green apples'];

var newArray = examples.map(function (elem) {
    return elem.trim().toLowerCase();
}).filter(function (elem) {
    return elem.substring(0, 5) === "apple";
}).sort();


console.log(newArray);
//make all lowercase
// examples.forEach(function (element) {

//     var newStr = element.trim();

//     newArray.push(newStr.toLowerCase());

//     var newNewArray = newArray.filter(function (elem) {
//        elem.subString(0, 5) === "apple";
//     });

//     console.log(newNewArray);
// });

var person = {
    name: "Walter White",
    age: 50,
    family: ["Skylar", "Flynn", "Holly"], // array within the person object
    city: "Albuquerque",
    smart: true, // boolean
    associates: { // associates object inside person object
        friend: "Jesse",
        enemy: "Gus"
    },
    hobbies: "Cooking"
}

var posts = [
    {
     title: "How to cook the perfect scrambled eggs",
     author: "Bob Odenkirk",
     comments: ["The secret is lots of butter", "Will this raise my cholesterol?"]
    },
    {
     title: "Eggs are cheap, quick, and easy",
     author: "Bryan Cranston",
     comments: ["What if I don't have a spatula?", "I love butter.", "Salt and pepper are the ONLY spices you need"]
    }
]
