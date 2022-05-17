/*
Write a function that takes a string as an argument
Return that string with a staggered capitalization scheme. 
Rules:
Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. 
Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

input: string
output: string, with alternating capitalization


Examples:

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

Algorithm:
iterate over string characters by converting to an array of characters
map the characters based on index
  capitalize even-indexed characters
  make odd-indexed characters lowercase
convert the transform ed array to a string
return string
*/

function staggeredCase(string) {
  return [...string].map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"


// alt from student solutions:
// const isItEven = (char, num) => num % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
// const staggeredCase = str => str.split('').map(isItEven).join('');