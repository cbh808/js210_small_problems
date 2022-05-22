/*
Problem:
Def FEATURED NUMBER:
odd number
multiple of 7
all digits in number occur once

Given a number find next 'featured number'

input: number, integer
output: number, integer, next featured number

Rules:
all input nums >= 0
largest featured number is 9876543201

Data Structure:
featured number
  odd number => number
  mult. of 7 => number
  all digits occur once => count characters (string) => either string or array of characters
output: number

Algorithm:
HELPER: all digits occuring once?
  convert digits to string and split into array of characters 'chars'
  create array 'uniques' and set to []
  iterate over all chars
    push char to uniques if uniques does NOT include current char
  RETURN uniques length === chars length

HELPER IS NUM A FEATURED NUMBER
  RETURN result of logical && evalution of
    - current value of num is odd: num % 2 === 1 &&
    - num % 7 === 0 &&
    - all digits occuring once (HELPER)

MAIN FUNCTION
Create constant MAX_FEATURED_NUM = 9876543201
LOOP from 1 more than input (number + 1) to MAX_FEATURED_NUM
  if current number 'num' is featured number
    RETURN 'num'
RETURN string 'There is no possible number that fulfills those requirements.'


*/
function doesNotRepeat(num) {
  let chars = String(num).split('');
  let uniques = [];
  chars.forEach( char => {
    if (!uniques.includes(char)) {
      uniques.push(char);
    }
  });
  return chars.length === uniques.length;
}

function featuredNumber(num) {
  return (num % 2 === 1 &&
          num % 7 === 0 &&
          doesNotRepeat(num));
}

function featured(number) {
  const MAX_FEATURED_NUM = 9876543201;
  for (let num = number + 1; num <= MAX_FEATURED_NUM; num += 1) {
    if (featuredNumber(num)) {
      return num;
    }
  }
  return 'There is no possible number that fulfills those requirements.';
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


/*
Alternative helper no repeating digits using object
HELPER No Repeating Digits (num)
  create an empty object
  convert num to array of characters
  iterate over array to access each 'char'
    if (obj[char]) exists return false
    else set obj[char] = true;
  RETURN true;
*/