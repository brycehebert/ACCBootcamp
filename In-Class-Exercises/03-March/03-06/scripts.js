var food = document.getElementById("fruit");

var food2 = document.getElementsByClassName("breakfast");

var myList = document.getElementById("myList");

var food3 = document.getElementsByTagName("li");

var food4 = document.querySelector("#fruit");

var food5 = document.querySelectorAll(".breakfast");

// var body = document.querySelector("body");
// body.style.backgroundColor = "blue"

// setInterval(function () {
//     body.style.backgroundColor = (body.style.backgroundColor === "blue") ? "orange" : "blue";
// }, 3000);

document.querySelector("button").addEventListener("click", function (){
    alert("How's it going?")
});

document.querySelector("h1").addEventListener("click", function (){
    document.querySelector("h1").style.color = "red"
});

document.querySelector("h1").addEventListener("mouseover", function (){
    document.querySelector("h1").style.color = "blue"
});