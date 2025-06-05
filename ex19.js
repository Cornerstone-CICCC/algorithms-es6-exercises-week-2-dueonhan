/*In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true

Input
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false

Instruction
Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/

function queenThreat(generateBoardArray) {


  let findArray = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (generateBoardArray[i][j] === 1) {
        findArray.push([i, j]);
        if (findArray.length === 2) break;
      }
    }
    if (findArray.length === 2) break;
  }


  console.log("findarray:", findArray)

  //leftUp to Rightunder
  function extractDiagonal1(matrix, findArray) {
    const result = [];

    const [r0, c0] = findArray;
    const n = matrix.length;

    for (let r = r0, c = c0; r < n && c < n; r++, c++) {
      if (r0 !== r && c0 !== c) {
        result.push([r, c]);
      }

    }
    return result;
  }

  console.log("extractDiagonal1 ans", extractDiagonal1(generateBoardArray, findArray))
  //leftUnder to Rightup
  function extractDiagonal2(matrix, findArray) {
    const result = [];

    const [r0, c0] = findArray; //baseline
    const n = matrix.length;

    for (let r = r0, c = c0; r >= 0 && c < n; r--, c++) {
      if (r0 !== r && c0 !== c) {
        result.push([r, c]);
      }

    }
    return result;
  }

  console.log("extractDiagonal2 ans", extractDiagonal2(generateBoardArray, findArray))
  console.log("extractDiagonal1 findArray", findArray)

  const firstQueen = findArray[0];   // ex. [2, 0]
  const secondQueen = findArray[1];  // ex. [7, 5]

  let Diagonal1Results = extractDiagonal1(generateBoardArray, firstQueen) //[ [ [ 2 ], [ 0 ] ], [ 3, 1 ], [ 4, 2 ], [ 5, 3 ], [ 6, 4 ], [ 7, 5 ] ]
  let Diagonal2Results = extractDiagonal2(generateBoardArray, firstQueen) //[ [ [ 2 ], [ 0 ] ], [ 1, 1 ], [ 0, 2 ] ]

  const Diagonal1BooleanResults = Diagonal1Results.some(item =>
    item[0] === secondQueen[0] && item[1] === secondQueen[1]
  );

  const Diagonal2BooleanResults = Diagonal2Results.some(item =>
    item[0] === secondQueen[0] && item[1] === secondQueen[1]
  );


  console.log(`Diagonal1BooleanResults: ${Diagonal1BooleanResults}`);
  console.log(`Diagonal2BooleanResults: ${Diagonal2BooleanResults}`);

  // row
  if (JSON.stringify(findArray[0][0]) === JSON.stringify(findArray[1][0]) || JSON.stringify(findArray[0][1]) === JSON.stringify(findArray[1][1]) || Diagonal1BooleanResults === true || Diagonal2BooleanResults === true) {
    return true;
  } else {
    return false;
  }


}



//console.log("extractDiagonal1: ", extractDiagonal1(generateBoard([0, 0], [5, 7])))



//console.log("extractDiagonal2: ", extractDiagonal2(generateBoard([0, 0], [5, 7])))

function generateBoard(whiteQueen, blackQueen) {

  let cheseBoard = []

  for (let i = 0; i < 8; i++) {
    const newArray = []

    for (let j = 0; j < 8; j++) {
      if (whiteQueen[0] === i && whiteQueen[1] === j || blackQueen[0] === i && blackQueen[1] === j) {
        newArray.push(1)
      } else {
        newArray.push(0)
      }
    }
    cheseBoard.push(newArray);
  }
  //console.log("cheseBoard2", cheseBoard);

  return cheseBoard
}




console.log("queenThreat(generateBoard([2, 0], [5, 7]))", queenThreat(generateBoard([2, 0], [7, 5]))) 