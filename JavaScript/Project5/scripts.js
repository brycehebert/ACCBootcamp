let imgs = ["1.jpg", "2.jpg", "3.jpg",
            "4.jpg", "5.jpg", "6.jpg"];

let currentImg = 0;

function imgTracker (direction){
    if (direction == "next"){
        (currentImg >= imgs.length - 1) ? currentImg = 0 : currentImg++;
    }
    else if (direction == "previous") {
        (currentImg <= 0) ? currentImg = imgs.length - 1 : currentImg--;
    }
    else {
        console.log("How did we even get here?");
        return;
    }
    updateImg();
}

function updateImg(){
    document.getElementById("gallery").src = `assets/${imgs[currentImg]}`;
}