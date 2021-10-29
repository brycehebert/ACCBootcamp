let backgroundSrc = ["background1.jpg",
                     "background2.jpg",
                     "background3.jpg"];

let background = document.getElementById("bg");
let i = 0;

//Rotate through backgrounds every 3 seconds
setInterval(() => {
    if (++i > backgroundSrc.length - 1) {
        i = 0;
    }
    background.style.backgroundImage = `url("assets/${backgroundSrc[i]}")`;
}, 3000);