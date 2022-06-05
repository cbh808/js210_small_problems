/*
Write a function that takes two sorted arrays as arguments and
returns a new array that contains all the elements
from both input arrays in sorted order.

You may not provide any solution that requires you to sort the
result array.
You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

input: two arrays
output: one array, sorted in ascending order

Rules:
Not allowed no collect the two input arrays into one array and then sort
Build result array one element at a time in proper order
solution should not mutate the input arrays.
  is it allowed to make a copy of the input arrays?  => just say no.
  is it allowed to combine values of input array and use that new array to create results => no
  is it allowed to concatenate the remaining part of an array to results => no

[1, 5, 9], [2, 6, 8]
[]
compare 1 and 2 => 1 is lower so add 1 to results
in array in which element is selected (array1) move to next element
compare 5 and 2 => 2 is lower so add 2 to end of results array
in array2 move to next element
compare 5 and 6 => 5 is lower so add 5 to end of results array
in array1 move to next element
compare 9 and 6 => 6 is lower so add 6 to end of results array
in array2 move to next element
compare 9 and 8 => 8 is lower so add 8 to end of results array
end of array2 reached, therefore add all remaining elements to end of array
  (once end of array reached, add any remaining elements to results array)


Steps:
Create empty array 'results'
Iterate from front to back over both arrays
-Compare the first (left-hand values) of each array to each other
-Push the lower value to the results array
-Go to the next value to the right in the array that had the previous lowest value
-Repeat above from Compare until last value (right-most) has been pushed to results
Add any other remainng values in other array to results
Return Results

Algorithm:
Create empty array 'results'

Create two counters idxArray1 & idxArray2 and set to 0

Compare the arrays from left to right
  while (idxArray1 != arr1 length) and (idxArray2 != arr2 length)
    create conditional if arr1[idxArray1] < arr2[idxArray2]
      push value at arr1[idxArray1] to results
      increment idxArray1
    otherwise
      push value at arr2[idxArray2] to results
      increment idxArray2

HELPER GET REMAINING
Add any other remainng values in other array to results
  if idxArray1 == arr1 length - 1
    loop over remaining values of arr2 from idxArray2 to < arr2 length
    push each value to results
  otherwise
    loop over remaining values of arr1 from idxArray1 to < arr1 length
    push each value to results

Return Results
*/
function getRemaining(results, idxArray1, idxArray2, arr1, arr2) {
  if (idxArray1 === arr1.length) {
    for (let idx = idxArray2; idx < arr2.length; idx += 1) {
      results.push(arr2[idx]);
    }
  } else {
    for (let idx = idxArray1; idx < arr1.length; idx += 1) {
      results.push(arr1[idx]);
    }
  }
  return results
}

function merge(arr1, arr2) {
  let results = [];
  let idxArray1 = 0;
  let idxArray2 = 0;

  while (idxArray1 !== arr1.length && idxArray2 !== arr2.length) {
    if (arr1[idxArray1] < arr2[idxArray2]) {
      results.push(arr1[idxArray1]);
      idxArray1 += 1;
    } else {
      results.push(arr2[idxArray2]);
      idxArray2 += 1;
    }
  }

  results = getRemaining(results, idxArray1, idxArray2, arr1, arr2);

  return results;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
