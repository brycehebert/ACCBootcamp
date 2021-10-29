//conditionals
var hour = 18;

if (hour < 12) {
    console.log("Good Morning.");
} else if (hour > 12 && hour < 17) {
    console.log("Good afternnon.");
} else {
    console.log("Good evening.");
}

// while loop
var count =  1;

while (count < 11) {
    console.log(`count is ${count}`);
    count++;
}

//print odd numbers
var odd = 1;

while (odd < 101) {
    if (odd % 2 == 1) {
        console.log(`${odd} is an odd number`);
    }
    odd++;
}

//for loop
for (count = 1; count <= 5; count++) {
    console.log(count);
}

//for loop + conditional
for (count = 0; count <= 21; count++) {
    if (count % 2 == 1)
        console.log(count);
}

//functions
function greetings() {
    console.log("Hey guys, how's it going?");
    console.log("Where's the party at?");
    console.log("Did anybody bring spinach dip?");
}

greetings();

//functions with parameters
function greetingsName(name) {
    console.log(`Hey ${name} how's it going?`);
}

greetingsName("Jennifer");
greetingsName("Jim");
greetingsName("Bob");

function greetingsAge(age) {
    return `So I understand you're ${age} years old.`;
}

console.log(greetingsAge(27));

function fullGreeting(age, name) {
    return `Hi ${name}, I believe you're ${age} years old.`;
}

console.log(fullGreeting(27, "Jenny"));

//area function
function area(length, width) {
    return length * width;
}

console.log(area(10, 2));

var result = area(10 ,2);
document.write("The answer is " + result);

//function expressions
var hello = function () {
    console.log("How are you?");
};

hello();

//Scope
function hello2() {
    var blah = "It's early in the morning";
    console.log(blah);
}

hello2();
//console.log(blah); //will give error

//functions as arguments
function hello3() {
    console.log("Will you be my friend?");
    console.log("Please? I will give you money.");
}

//setInterval(hello3, 3000);

//anonymous function
setInterval(function() {
    console.log("Hello");
}, 3000);