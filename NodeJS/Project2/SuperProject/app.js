const marvel = require("marvel-characters");

//show random character
console.log("Random character:", marvel());

//show number of characters in database
console.log("Total characters:", marvel.characters.length);

//run Array.filter() to find all characters whose name starts with "Man"
let charsNamedMan = marvel.characters.filter((el) => el.substr(0, 3) === "Man");
//show "Man" chracters
charsNamedMan.length > 0
    ? console.log("Chars with Man:", charsNamedMan)
    : console.log("Chars with Man:", "No matches found");

//run Array.find() to find "Iron Man"
let ironMan = marvel.characters.find((el) => el === "Iron Man");
//show Iron Man
console.log("Tony Stark:", ironMan || "No matches found");

//run Array.find() to find "Batman"
let batman = marvel.characters.find((el) => el === "Batman");
//show Batman
console.log("Bruce Wayne:", batman || "No matches found");
