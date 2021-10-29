console.log([1,2,3].map(el => el * 2));

let doubleAndFilter = (array) => array.map(el => el*2).filter(el => el % 3 === 0);

console.log(doubleAndFilter([10,20,30,40]));
