/*
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

Log to the console all even numbers starting at 1 and ending at 99.

input:
start number = 1
end number = 99

Data Structure
use built-in number data type

Algorithm:
1. Set 'startNumber' to 1
2. Set 'endNumber' to 99
3. Set 'number' to 'startNumber'
4. For all numbers from startNumber to endNumber, log each odd number
  Check that current 'number' not > than 'endNumber'
  Check if current 'number' is an odd number:
    y: increment by one and skip to next number
    n: Log 'number' to console
  Increment 'number' by one
*/

let startNumber = 1;
let endNumber = 99;

for (let number = startNumber; number <= endNumber; number += 1) {
   if (number % 2 === 1) {
    continue;
  } else console.log(number);
}