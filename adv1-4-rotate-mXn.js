/*
[
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
]

matrix[0][0] => newMatrix[0][2] 
matrix[1][0] => newMatrix[0][1] 
matrix[2][0] => newMatrix[0][0]

matrix[0][1] => newMatrix[1][2]
matrix[1][1] => newMatrix[1][1]
matrix[2][1] => newMatrix[1][0]

matrix[0][2] => newMatrix[2][2]
matrix[1][2] => newMatrix[2][1]
matrix[2][2] => newMatrix[2][0]

Iterate over columns 0 to max columns
  Nested iteratation over rows max to min
    

*/

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrix) {
  const TRANSPOSED_ROWS = matrix[0].length;
  const TRANSPOSED_COLUMNS = matrix.length;

  const newMatrix = [];
  for (let row = 0; row < TRANSPOSED_ROWS; row += 1) {
    newMatrix.push([]);
  }

  for (let col = 0; col < TRANSPOSED_ROWS; col += 1) {
    for (let row = 0; row < TRANSPOSED_COLUMNS; row += 1) {
      let maxIdx = TRANSPOSED_COLUMNS - 1;
      newMatrix[col][maxIdx - row] = matrix[row][col];
    }
  }
  return newMatrix;
}

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]