/* 
Find index of first fib that has length specified

Rules use big int

Data Structures
input big int
calc fib in an array for iteration => must be able to break out
output big int

Alg.
create fib using big int
  index 0 = fib 1
  index 1 = fib 1
  index 2 = fib 3

check if length fib at given index is equal to input length
*/
function findFibonacciIndexByLength(desiredLength) {
  let first = 1n;
  let second = 1n;
  let fib;
  let length;

  for (index = 3n; index < 50000n; index +=1n) {
    fib = first + second;
    length = String(fib).length;
    if (length == desiredLength) {
      break;
    }
    first = second;
    second = fib;
  }
  return index;
}

// function findFibonacciIndexByLength(length) {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     count += 1n;
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < length);

//   return count;
// }

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.