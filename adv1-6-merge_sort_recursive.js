function mergeSort(array) {
  if (array.length === 1) return array;

  let middle = Math.floor(array.length / 2);
  let subarray1 = array.slice(0, middle);
  let subarray2 = array.slice(middle);

  subarray1 = mergeSort(subarray1);
  subarray2 = mergeSort(subarray2);
  
  return merge(subarray1, subarray2);
}

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


console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]