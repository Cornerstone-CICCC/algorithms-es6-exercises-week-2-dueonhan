/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function (data) {
  // Put your solution here
  let sum = 0;

  const sortDesc = (a, b) => b > a ? 1 : -1;

  console.log(data.sort(sortDesc))
  sum = data.sort(sortDesc)[0] + data.sort(sortDesc)[1]

  return sum;
};


console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;
