/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. 

Rules:
You may assume that the arguments contain the same number of elements.

input: 2 arrays of numbers
output: array of numbers

Example:
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

Algorithm:

loop over array1, transform elements by multiplying each value by 
corresponding value, i.e. same index,  in 2nd array

*/
// Solution 1
function multiplyList(arr1, arr2) {
  return arr1.map((value, index) => {
    return value * arr2[index];
  });
}

// Solution 2
function multiplyList(arr1, arr2) {
  let result = [];

  for (let index = 0; index < arr2.length; index += 1) {
    result.push(arr1[index] * arr2[index]);
  }

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]