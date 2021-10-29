let backgroundColors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', 
                        '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', 
                        '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', 
                        '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', 
                        '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', 
                        '#1976D2', '#1565C0', '#0D47A1'];
let currBackground = 0;

//Establish initial state of 12/24-hour toggle
let toggle24Hour;
updateToggle();
updateToggleLabel();

//Display initial time
updateClock(getCurrentTime());

//Update time and background color every second
setInterval(() => {
    updateClock(getCurrentTime());
    updateBackground();
}, 1000);

//Return formatted string of the current time
function getCurrentTime() {
    let d = new Date();
    let hour = d.getHours();
    let minute = zeroPadding(d.getMinutes());
    let second = zeroPadding(d.getSeconds());
    let timePeriod = "";

    //Apply appropriate hour when 12-hour clock is used.
    if (toggle24Hour == true){
        if (hour == 0) {
            hour = 12;
            timePeriod = "AM";
        } else if (hour >= 1 && hour <= 11 ) {
            timePeriod = "AM";
        } else if (hour == 12) {
            timePeriod = "PM";
        } else if (hour >= 13) {
            hour -= 12;
            timePeriod = "PM";
        }
    } else { //using 24-hour clock
        hour = zeroPadding(hour);
    }

    return `${hour}:${minute}:${second} ${timePeriod}`;
}

//Update clock on page
function updateClock(currTime) {
    document.getElementById("clock").innerHTML = currTime;
}

//Add zeroes to the beggining of time segments less than 10
function zeroPadding(x) {
    return (x < 10) ? '0' + x : x;
}

//Update background color of page to next value in backgroundColors array
function updateBackground() {
    if (++currBackground > backgroundColors.length - 1){
        currBackground = 0;
    }
    document.getElementById("bg").style.backgroundColor = backgroundColors[currBackground];
}

//Update the current state of the 12/24-hour toggle
function updateToggle() {
    toggle24Hour = document.getElementById("toggle24Hour").checked;
}

//Update label for 12/24-hour toggle
function updateToggleLabel() {
    document.getElementById("labelToggle").innerHTML = (toggle24Hour) ? "Switch to 24 hour" : "Switch to 12 hour";
}

//Event listener for 12/24-hour toggle
document.getElementById("toggle24Hour").addEventListener("change", () => {
    updateToggle();
    updateToggleLabel();
    updateClock(getCurrentTime());
});