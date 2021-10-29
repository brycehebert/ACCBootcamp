//Answer key array
let answers = ["a", "b", "a", "d", "c"];

//Student answers array
let student = ["a", "c", "a", "b", "c"];

//Note: Program assumes that the answer and student arrays are of the same length.

//Use Array.reduce to determine grade
let result = answers.reduce((accumulator, currentVal, currentIndex) => {
    if (!student[currentIndex]) {                      //Student provided no answer, give 0 points
        return accumulator;
    } else if (currentVal === student[currentIndex]) { //Student answered correctly, give 4 points
        return accumulator + 4;
    } else {                                           //Student answered incorrectly, give -1 point
        return accumulator - 1;
    }
}, 0); //reduce has initialValue 0

//If score is less than 0 points, give 0 as result
result > 0 ? console.log("Final Score:", result) : console.log("Final Score:", 0);
