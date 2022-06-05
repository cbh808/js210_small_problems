/*
Problem: use binary search to find a search for argument
input: array, sorted
output:
-the sought for element, a primitive -OR-
-return -1 if no match

Assume valid input, array of primititves, sorted

Determine highest index of array
Set lowest to 0;
LOOP (lower idx <= highest index
Get middle index of remaining elements based on highest/lowest index
  middle index = round down (highest - lowest)
IF element at middle index matches arg2
  - Return element if matches
  ELSE IF => value at index < the one?
    y => reassign higest to current index - 1
    n => reassign lowest to current index  + 1
Return -1
*/

function binarySearch(array, theOne) {
  let upperIdx = array.length - 1;
  let lowerIdx = 0;
  while (lowerIdx <= upperIdx) {
    let middleIdx = Math.floor(upperIdx - lowerIdx);
    let currentValue = array[middleIdx];
    if (currentValue === theOne) {
      return middleIdx;
    } else if (currentValue > theOne) {
      upperIdx -= 1;
    } else lowerIdx += 1;
  }
  return -1;
}
const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6