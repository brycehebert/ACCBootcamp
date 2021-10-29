// let nums  = [prompt("Give a number."),
//              prompt("Give another number."),
//              prompt("Give a number again.")];

let nums = [];

for (let i = 0; nums.length < 3; i++) {
    let newNum = Number(prompt("Give a number."));
    while (Number.isNaN(newNum)) {
        newNum = Number(prompt("That wasn't a number. Try again."));
    }
    nums[i] = newNum;
}

let msg = document.querySelector("p");
let total = 0;

for (let i of nums) {
    total += i;
}

msg.innerHTML = `The sum of all of your numbers is ${total}.`;