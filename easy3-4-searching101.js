/* 
// Write a function that returns true if the string passed as an argument is a palindrome, 
// or false otherwise. A palindrome reads the same forwards and backwards. 
// For this problem, the case matters and all characters matter.

// input: string
// output: Boolean, whether or not input is a palindrome

Rules:
non-strings as inputs: 
  numbers to be converted to strings, incl. NaN, Infinity, 

  booleans to be converted to numbers & then strings
  undefined to evaluate to number and then string
  null to evaluate to number and then string

  arrays to joined as strings and evaluated
    array joining ignores properties if any
  objects => evaluate the values of all key/value pairs as an array
    array => joined as strings

all spaces and punctuation to be considered
letters are case-sensitive 'a' !== 'A'

Data structures
input: string (with exceptions)

array =  [] => join elements to string => evaluate string for palindromness
object = get array of object values [] => treat as array
output: boolean

Alg
Get all data types to strings
  convert non-numbers input that are not strings to numbers
    boolean, undefined, null => Number
  convert numbers to strings
  convert values of arrays to strings
    join the individual elements (ignore object properties) => join array (not object values)
  convert values of object properties to strings
    if typeof === object 
      get an array of the values
      join them into string

Evaluate string => is palindrome?
  convert string to array of letters, reverse, join and compare to forward string
*/
function isPalindrome(input) {
  if (typeof input === 'boolean' || input === undefined || input === null) {
    input = Number(input);
  }
  if (typeof input === 'number') {
    input = String(input);
  } else if (Array.isArray(input)) {
    input = input.join('');
  } else if (typeof input === 'object') {
    input = Object.values(input);
    
  }
  console.log(input);
  let reverse = input.split('').reverse().join('');
  console.log(reverse);
  return input === reverse;
}

Examples:

// case sensitive
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
// spacing matters
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)

// string representing number
console.log(isPalindrome('356653'));              // true

// empty string
console.log(isPalindrome(''));              // true

console.log('-----   6   -----');

// input is not string (number)
console.log(isPalindrome(356653));                // true



// input is not string (boolean)
console.log(isPalindrome(true));                // true

// input is not string (undefined)
console.log(isPalindrome(undefined));           // true

// input is not string (null)
console.log(isPalindrome(null));           // true

// input is not string (array)
console.log(isPalindrome([7, 8, undefined, NaN, 'denifednu', '8', '7']));        // true

console.log('-----   11   -----');
// input is not string (null)
console.log(isPalindrome([null, undefined]));  // true

// input is not string (array)
console.log(isPalindrome([7, 8, undefined, true, 'denifednu', '8', '7']));        // false

// input is not string (array)
console.log(isPalindrome([]));        // true

// input is not string (object)
console.log(isPalindrome({a:7, b:8, c:undefined, d:NaN, e:'denifednu', f:'8', g:'7'}));  // true