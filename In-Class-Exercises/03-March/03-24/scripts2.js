function return5() {
    return 5;
}

console.log("Test first: ", return5());

function log5() {
    console.log(5);
}

console.log("Test second: ");
log5();

function double(n) {
    return n * 2;
}

console.log("Test third: ", double(18));

function sum3(x, y, z) {
    let sum = 0;

    for (let el of arguments) {
        if (isNaN(Number(el))) return NaN;

        sum += Number(el);
    }
    return sum;
}

console.log("Test fourth: ", sum3(2, 5, 3));

function sumAny(...args) {
    if (args.length === 0) return 0;

    let sum = 0;

    for (let el of args) {
        if (isNaN(Number(el))){
            console.log(el + " is not a number. Skipped.")
            continue;
        };

        sum += Number(el);
    }
    return sum;
}

console.log("Test fifth: ", sumAny(2, 3, 12, 5, "4", 2, "hi"))