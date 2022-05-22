/*
Write a function that takes an array as an argument
sort array using bubble sort algorithm
The sorting should be done "in-place" — the function should mutate array.

input: array, min. 2 in length, can be string or number
output: array sorted, mutated array

Rules:
Use bubble sort (most inefficient version)
Assume array contains at least two elements.

Data Structures:
input array => use input array for iteration and comparison of values 
  use counter and reset to determine number of swaps per pass
  if find two values to swap => use the shorthand technique [ one, two ] =  [two, one];
output: original array sorted

Algorithm:
Declare 'swaps'
Do / while loop
  Set swaps to 0
  Iterate over input array from idx 0 to idx array length - 2
    compare values and swap if current value < than value at next index
Break do/while if swaps === 0;
Return array (mutated)

*/
function bubbleSort(array) {
  let swaps;

  do {
    swaps = 0;
    for (let idx = 0; idx < array.length - 1; idx += 1) {
      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        swaps += 1;
      }
    }
  } while (swaps > 0);

  return array;
}

const array1 = [5, 3];
console.log(bubbleSort(array1));
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
console.log(bubbleSort(array2));
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array3));
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]