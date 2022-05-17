/*
Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

// // Solution 1
// function substrings(string) {
//   let substrings = [];
//   string.split('').forEach((char, index) => {
//     for (let i = index + 1; i < string.length + 1; i += 1) {
//       substrings.push(string.slice(index, i));
//     }
//   });
//   return substrings;
// }

// console.log(substrings('abcde'));


// // Solution 2
// function substrings2(string) {
//   let substrings = [];
//   string.split('').forEach((char, idx1) => {
//     let word = string.slice(idx1);
//     word.split('').forEach((char, idx2) => {
//       substrings.push(word.slice(0, idx2 + 1 ));
//     });
//   });
//   return substrings;
// }

// console.log(substrings2('abcde'));


// // Solution 3
// function substrings3(string) {
//   let substrings = [];
//   string.split('').forEach((char, stIdx) => {
//     string.slice(stIdx).split('').forEach((char, endIdx) => {
//       substrings.push(string.slice(stIdx, stIdx + endIdx + 1));
//     });
//   });
//   return substrings;
// }

// console.log(substrings3('abcde'));


// // Solution 4 with previous problem function
// function leadingSubstrings(string) {
//   let substrings = [];
//   string.split('').forEach((char, idx) => {
//     substrings.push(string.slice(0, idx + 1));
//   });
//   // console.log(substrings);
//   return substrings;
// }

// function substrings4(string) {
//   let substrings = [];
//   string.split('').forEach((char, stIdx) => {
//     substrings = substrings.concat(leadingSubstrings(string.slice(stIdx)));
//   });
//   return substrings;
// }

// console.log(substrings4('abcde'));


// // Solution 5 get rid of unused paramterrs 
// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let len = 1; len <= string.length; len += 1) {
//     substrings.push(string.slice(0, len));
//   }
//   // console.log(substrings);
//   return substrings;
// }

// function substrings4(string) {
//   let substrings = [];
//   for (let idx = 0; idx < string.length; idx += 1) {
//     let word = string.slice(idx);
//     substrings = substrings.concat(leadingSubstrings(word));
//   }
//   return substrings;
// }

// console.log(substrings4('abcde'));


// function leadingSubstrings(string) {
//   return [...string].map((_, idx) => [...string].slice(0, idx + 1).join(''))
// }

// //console.log(leadingSubstrings('abcde'));

// function substrings(string) {
//   return [...string].flatMap((_, idx) => leadingSubstrings([...string].slice([idx])))
// }

// console.log(substrings('abcde'));



// function leadingSubstrings(string) {
//   return [...string].map((_, idx) => string.slice(0, idx + 1))
// }

// // console.log(leadingSubstrings('abcde'));

// function substrings(string) {
//   return [...string].flatMap((_, idx) => leadingSubstrings(string.slice([idx])))
// }



Alg:
Declare result and set to empty arrray
Iterate over characters of string to access starting index
  Get a slice from current starting index to end of string
  Call leading substrings function to obtain substrings
    pass in slice as string arg
  Push return value to `result` array
Return `result` array
*/


// few weeks later
function leadingSubstrings(string) {
  let substrings = [];
  for (let len = 1; len <= string.length; len += 1) {
    substrings.push(string.slice(0, len));
  }

  return substrings;
}


function substrings(string) {
  let result = [];
  string.split('').forEach((_, idx) => {
    result.push(leadingSubstrings(string.slice(idx)));
  });
  return result;
}


console.log(substrings('abcde'));