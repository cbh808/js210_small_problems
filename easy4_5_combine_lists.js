Write a function that combines two arrays passed as arguments
Returns a new array that contains all elements from both array arguments, 
each element taken in alternation.

Assume that both input arrays are non-empty, and that they have the same number of elements.

Data Structure:
input: two arrays of same size
output: array

Algorithm
declare result & assign empty array
interate over one array, using index to access values of both arrays
push value of current index of each array to result array
return result

*/

function interleave(array1, array2) {
  let result = [];

  for (let i = 0; i < array1.length; i += 1) {
    result.push(array1[i], array2[i]);
  }

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]