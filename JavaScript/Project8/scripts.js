//References to the clock hands in DOM
const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

//The offset constant is used to account for the initial position of each hand being at 90 degrees (3 o'clock) instead of 0.
const offset = -90;

//The position of each clock hand in degrees.
let hourPos = 0;
let minutePos = 0;
let secondPos = 0;

//currentTime will be used to calculate the delta time between each interval call.
let currentTime = {
    seconds: 0,
    minutes: 0
};
updateCurrentTime();

//Set the initial reading of the clock
updateClock(setInitialPosition());

//Update the clock reading and currentTime object every second.
setInterval(() => {
    updateClock(updatePosition());
    updateCurrentTime();
}, 1000);

//Determines the initial position of each hand based on the current time.
function setInitialPosition() {
    //Use Date object to determine the current time.
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    if (hour > 12) {
        hour -= 12;
    }

    //Determine the initial position, in degrees, that each hand should be at.
    secondPos = 6 * second + offset;
    minutePos = 6 * minute + offset;
    //We want the hour hand to move in between hours instead of only on each hour.
    hourPos = hour * 30 + Math.floor(minute / 12) * 6 + offset;

    //Return array containing the position in degrees each hand should be at.
    return [secondPos, minutePos, hourPos];
}

//Determine the new position in degrees that each hand of the clock should be at.
function updatePosition() {
    //Determine the time since last update to move hands appropriately
    let d = Date.now();
    let deltaTime = [Math.floor(d / 1000) - currentTime.seconds, Math.floor(d / 60000) - currentTime.minutes];

    //Every second, the second should move by 6 degrees.
    secondPos += deltaTime[0] * 6;
    //every minute, the minute hand moves by 6 degrees.
    minutePos += deltaTime[1] * 6;
    //Move the hour hand 6 degrees every 12 minutes to avoid it being stationary until the hour changes.
    //Use the position of the minute hand to determine this.
    //The hour hand moves 6 degrees for every 72 degrees of the minute hand.
    if (deltaTime[1] && (minutePos - offset) % 72 === 0) {
        hourPos += 6;
    }

    //Return array of the updated positions of each hand
    return [secondPos, minutePos, hourPos];
}

//Update the hands of the clock. Parameter is an array that contains the new position of each hand.
function updateClock(newPosition) {
    //Use CSS transform property to move hands to correct position
    secondHand.style.transform = `rotate(${newPosition[0]}deg)`;
    minuteHand.style.transform = `rotate(${newPosition[1]}deg)`;
    hourHand.style.transform = `rotate(${newPosition[2]}deg)`;
}

//Update the currentTime object to be used in the next position calculation.
function updateCurrentTime() {
    let d = Date.now();
    currentTime.seconds = Math.floor(d / 1000);
    currentTime.minutes = Math.floor(d / 60000);
}
