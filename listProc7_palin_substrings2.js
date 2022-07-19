/*
Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards.

Rules:
Substrings in returned list to be sorted by their order of appearance in the input string.
Duplicate substrings to be included multiple times.
You may (and should) use the substrings function you wrote in the previous exercise.
Palindromes case sensitive
Single characters are not palindromes.

Mental model check all substrings of input string with length > 1 and add to result array if a given substring is a palindrome

input: string
output: array of palindrome substrings

Steps
Create a results array and set to empty array
Get an array of all substrings (use previous substrings function)
Filter array 
  for substrings of length greater than one
  for substrings that are palindromes
    string of characters forwards is same as string backwards
    convert string to array of characters and reverse and join back together
Return filtered array
*/
function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

function palindromes(string) {
  let allSubstrings = substrings(string);
  return allSubstrings.filter(subString => {
    return subString.length > 1 && isPalindrome(subString);
  });
}

function leadingSubstrings(string) {
  let array = string.split('');
  let result = array.reduce((arr, _, idx) => {
    arr = arr.concat(string.slice(0, idx + 1));
    return arr;
  }, []);
  return result;
}

function substrings(string) {
  return string.split('').reduce((arr, _, idx) => {
    arr = arr.concat(leadingSubstrings(string.slice(idx)));
    return arr;
  }, []);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ] -->