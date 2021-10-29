let userName = prompt("Tell me your name.");
let num1 = prompt("Give me a number.");
let num2 = prompt("Give me another number.");

let msg = document.querySelector("p");

msg.innerHTML = showName();
msg.innerHTML += showNumbers();

function showName() {
    return `You are going to have a wonderful day ${userName}`;
}

function showNumbers() {
    return `<br>By the way, the sum of your numbers is ${Number(num1) + Number(num2)}.`;
}