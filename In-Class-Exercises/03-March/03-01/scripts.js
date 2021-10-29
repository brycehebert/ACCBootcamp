function getName() {
    let fname = prompt("Hello. What is your first name?");
    let lname = prompt("And what is your last name?");
    document.write(` Hello ${fname} ${lname}`);
}

//getName();

function isHighest(x, y, z) {
    let arr = [x, y, z];
    arr.sort().reverse();
    console.log(`Highest is ${arr[0]}`);
}

isHighest(0.1, 2.8, 30);