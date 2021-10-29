// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  
  let result;
  
  for(el of A){
    let instances = A.reduce((accumulator, value)=> {
      if (value === el)
        return accumulator + 1;
      return accumulator;
    }, 0);
    if (instances % 2) {
      result = el;
      break;
    }
  };
  
  return result;
}

// Create a function that 
// 1. creates a 2-D array in JS (find out how to accomplish that).  
// 2. In that array, randomly place n chess queens (n is a provided argument). The presence of a queen is denoted by an object like this ... {order: 1, name: "Alice"}.  
// 3. Return a reference to the array.

function randomQueens(size, queens) {
  let chessBoard = new Array();

  for (let i = 0; i < size; i++) {
    chessBoard[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      chessBoard[i][j] = undefined;
    }
  }

  let x = 0, y = 0;

  while(queens > 0){
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);
    if (!chessBoard[x][y]) {
      chessBoard[x][y] = {order: 1, name: "alice"};
      queens--;
    }
  }

  return chessBoard;
}

console.log(randomQueens(3, 3));