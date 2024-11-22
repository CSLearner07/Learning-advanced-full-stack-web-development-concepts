// function Square(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

// function sumOfSquares(a, b) {
//   let Square1 = Square(a);
//   let Square2 = Square(b);
//   return Square1 + Square2;
// }

// function sumOfCubes(a, b) {
//   let Cube1 = cube(a);
//   let Cube2 = cube(b);
//   return Cube1 + Cube2;
// }

// let ans = sumOfCubes(1, 2);
// console.log(ans);

//Comment above code to understand callback given in below code for the same above code.

function Square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, fn) {
  let Square1 = fn(a);
  let Square2 = fn(b);
  return Square1 + Square2;
}

let ans = sumOfSomething(1, 2, Square);
console.log(ans);

//By introducing callback your function becomes generic in format
