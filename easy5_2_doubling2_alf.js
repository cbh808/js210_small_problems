/*

Problem: 
  -Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. 
  
  Rules:
  
    -The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
  
Examples:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

Data Structures:

  Input  = String
  Output = String

Algorithm:

  -create a new empty string 'doubledString' to return the result
  -iterate over the argument string
    -On each iteration
      -if the current character is not a vowel or non alphanumeric
        -continue
      -else
        -reassign current character to `doubledString` twice
  -return `doubledString`
  

*/
// const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
//                   'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// function doubleConsonants(string) {
//   const stringArray = [];

//   for (let i = 0; i < string.length; i += 1) {
//     stringArray.push(string[i]);
//     if (CONSONANTS.includes(string[i].toLowerCase())) {
//       stringArray.push(string[i]);
//     }
//   }

//   return stringArray.join('');
// }


``

function doubleConsonants(string) {
  let doubledString = '';
  let exceptions = /[aeiou0-9\W]/i;
  
  string.split('').forEach(char => {
    if (!exceptions.test(char)) {
      doubledString += char + char;
    } 
      else {
      doubledString += char;
      }
  });
  
  return doubledString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""