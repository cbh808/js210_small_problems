/*
Uppercase Check

Problem:
Write a function that takes a string argument
Return true if all of the alphabetic characters inside the string are uppercase; otherwise, return false. 

Rules:
Ignore characters that are not alphabetic.
  i.e. non-alphabetic characters are allowed

Examples:
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

Algorithm:
compare input string to the upper case version of string
if strictly equivalent => return true else false

*/

function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true


/*
function isUppercase(string) {
  return !/[a-z]/.test(string);
}
*/