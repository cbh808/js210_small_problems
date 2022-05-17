/* do again
Problem:
  -Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. 
  
  Rules:
    -Examine the examples to see what we mean. 
    -You may assume that the array always contains at least one number.
    
Examples:

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
  (1) + (1 + 2) + (1 + 2 + 3) + (1 + 2 + 3 + 4) + (1 + 2 + 3 + 4 + 5)
   1 +  3  + 6 + 10 + 15
   
Data Structures:

  Input  = array of numbers
  Output = number
  
  [3, 5, 2] => [3], [3, 5], [3, 5, 2]
              slice(0, )
  
Algorithm:
  -create a new empty array to push leading subsequence subarrays
  -iterate over the argument
    -for each iteration
      -push a copy of the array with increasing elements
  -transform each subarray into its elements added together
  -add all the transformed subarrays
  -return the sum of the subarrays
  
*/

function getSubArrays(array) {
  let subArrays = [];
  array.forEach((_, index) => {
    subArrays.push(array.slice(0, index + 1));
  });
  
  return subArrays;
}

function addSubArrays(array) {
  return array.map(subArr => {
    return subArr.reduce((sum, value) => sum += value);
  });
}

function sumOfSums(array) {
  let subArrays = getSubArrays(array);
  
  let addedSubArrays = addSubArrays(subArrays);
  
  return addedSubArrays.reduce((sum, value) => sum += value);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35