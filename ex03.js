/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {

  // Put your solution here    a, e, i, o, u
  let count = 0;
  let words = data.split("");

  words.filter((element, index) => {
    if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") count++
  })

  return count;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
