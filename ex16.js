/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
  let inputWords = input.split('')
  let returnWords = "";


  if (Array.isArray(caze)) {
    let cazeType = caze[0]
    caze = caze[1]

    inputWords = inputWords.map((inputWord, i) => {
      if (cazeType === "upper") {
        return inputWord.toUpperCase()
      } else {
        return inputWord.toLowerCase()
      }
    });
  }


  inputWords.map((inputWord, i, array) => {
    let beforeIndex = i - 1;

    if (caze === "camel") {

      if (inputWord === " ") {
        return;
      }

      if (array[beforeIndex] === " ") {
        returnWords += inputWord.toUpperCase()
      } else {
        returnWords += inputWord
      }



    } else if (caze === "pascal") {


      if (inputWord === " ") {
        return;
      }
      if (i === 0 || array[beforeIndex] === " ") {
        returnWords += inputWord.toUpperCase();
      } else {
        returnWords += inputWord.toLowerCase();
      }


    } else if (caze === "snake") {

      if (inputWord !== " ") {
        returnWords += inputWord
      } else {
        returnWords += "_"
      }



    } else if (caze === "kebab") {

      if (inputWord !== " ") {
        returnWords += inputWord
      } else {
        returnWords += "-"
      }



    } else if (caze === "title") {


      if (inputWord === " ") {
        returnWords += " ";
      } else if (i === 0 || array[beforeIndex] === " ") {
        returnWords += inputWord.toUpperCase();
      } else {
        returnWords += inputWord.toLowerCase();
      }



    } else if (caze === "vowel") {

      if (inputWord === "a" || inputWord === "e" || inputWord === "i" || inputWord === "o" || inputWord === "u") {
        returnWords += inputWord.toUpperCase()
      } else {
        returnWords += inputWord
      }



    } else if (caze === "consonant") {

      if (inputWord === "a" || inputWord === "e" || inputWord === "i" || inputWord === "o" || inputWord === "u") {
        returnWords += inputWord
      } else {
        returnWords += inputWord.toUpperCase()
      }


    }

  }

  );
  return returnWords;

};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
