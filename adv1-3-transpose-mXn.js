const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  const TRANSPOSED_ROWS = matrix[0].length;
  const TRANSPOSED_COLUMNS = matrix.length;

  const newMatrix = [];
  for (let row = 0; row < TRANSPOSED_ROWS; row += 1) {
    newMatrix.push([]);
  }

  for (let row = 0; row < TRANSPOSED_ROWS; row += 1) {
    for (let col = 0; col < TRANSPOSED_COLUMNS; col += 1) {
      newMatrix[row][col] = matrix[col][row];
    }
  }
  return newMatrix;
}

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]