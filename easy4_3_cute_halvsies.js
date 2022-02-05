// 
/* Write a function that takes an array as an argument
Returns an array that contains two elements, each of which is an array. 

Rules:
Put the first half of the original array elements in the first element of the return value
Put the second half in the second element. 
If the original array contains an odd number of elements, 
  - place the middle element in the first half array
If array has one element
  - one element in first array, 2nd empty
If array empty
  - both arrays empty
  
Data Structures:
input: array with 0 or more elements
output: nested array with two array elements (subarrays)


Algorithm: 

check if array.length === 1
  return subarray 1 with element and an empty array
determined length of array by dividing by 2, rounding down if float
check if even or odd number of elements
  - remainder: number of elements % 2
    -> number of elements in first subarray => increment by 1
create subarrays using lengths 
return `result` with subarrays
*/

function halvsies(array) { 
  let firstLength = Math.floor(array.length / 2);
  let secondLength = Math.floor(array.length / 2);
  
  if (array.length % 2 === 1) {
    firstLength += 1;
  }
  
  let first = array.slice(0, firstLength);
  let second = array.slice(firstLength);
  
  return [first, second];
  
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]