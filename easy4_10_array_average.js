/* Array Average
Write function that takes one argument, an array containing integers
Returns the average of all the integers in the array
Rounded down to the integer component of the average. 
Rules:
The array will never be empty
The numbers will always be positive integers
Algorithm:
reduce function to sum of elements
divide by length of input array
round down to obtain integer result
return result
*/
function average(array) {
  let sum = array.reduce((sum, value) => sum + value);
  let avg = sum / array.length;
  return Math.floor(avg);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40