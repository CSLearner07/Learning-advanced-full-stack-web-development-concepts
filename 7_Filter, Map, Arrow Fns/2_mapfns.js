/*
Given an array, give me back a new array in which every value is multiplied by 2
input [1, 2, 3, 4, 5] 
output [2, 4, 6, 8, 10]
*/

const input = [1, 2, 3, 4, 5];

//solution
// const newArray = [];

// for(let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 3);
// }
// console.log(newArray);

//other solution
// function transform(i) {
//   return i * 2;
// }

// const ans = input.map(transform);
// console.log(ans);

//finally the original use and faster then above solution is below

const ans = input.map(function (i) {
  return i * 2;
});
console.log(ans);
