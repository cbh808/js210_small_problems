//
function halvsies(array) {
  let firstLength = Math.floor(array.length / 2);

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