/*
Given a 3x3 matrix, transpose it

input: nested array representing 3 x 3 matrix
output, nested array, tranposed input array

Rules:
do not mutate orginal argument

Example:
transpose: for a given row and column, exchage their indexes
e.g. 
matrix[0][0] => matrix[0][0]
matrix[0][1] => matrix[1][0]
matrix[0][2] => matrix[2][0]

matrix[1][0] => matrix[0][1]
matrix[1][1] => matrix[1][1]
matrix[1][2] => matrix[2][1]

...
Data Structures
input: nested array
get a clone of input array that is not shallow => each element must also be clone
output: new nested array

Algorithm;
Create constant MATRIX_SIZE = 3
Create empty 3x3 matrix 'newMatrix'
Iterate over the rows 0 to MATRIX_SIZE
  Iterate over the columns 0 to MATRIX_SIZE
    Assign transposed values of matrix at current row and column to newMatrix
Return newMatrix
*/

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const MATRIX_ROWS = 3;
const MATRIX_COLUMNS = 3;

function transpose(matrix) {

  const newMatrix = [];
  for (let row = 0; row < MATRIX_ROWS; row += 1) {
    newMatrix.push([]);
  }

  for (let row = 0; row < MATRIX_ROWS; row += 1) {
    for (let col = 0; col < MATRIX_COLUMNS; col += 1) {
      newMatrix[row][col] = matrix[col][row];
    }
  }
  return newMatrix;
}

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]