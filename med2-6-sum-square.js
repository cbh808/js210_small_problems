/*
Write a function that computes the difference
  between the square of the sum of the first n positive integers
  -AND-
  the sum of the squares of the first n positive integers.

input: number, positive integer
output, number

Data Structures
calculate sum of numbers from 1 to n and square it to get squareOfSums (sum, square)
  - running sum of numbers
  - square of final sum
calculate square of each number from one to n and add it to running total sumOfSquares (square, sum)
  - running sum of each number squared
subtract: squareOfSums - sumOfSqares

Algorithm:
MAIN FUNCTION:
assign 0 to 'sum' (running total)
assign 0 to sumOfSquares (running total of squares)
LOOP from 1 to n, assinged to 'num'
  increment sum by num
  increment sumOfSquares by num squared
Calculate 'squareOfSum', sum ** 2
return squareOfSum - sumOfSquares
*/

function sumSquareDifference(number) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let num = 1; num <= number; num += 1) {
    sum += num;
    sumOfSquares += num ** 2;
  }
  let squareOfSum = sum ** 2;
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150