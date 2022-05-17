/*
Palindromic Substrings

Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

input: string
output: array containing all palindromes

Rules:
palindrome is same sequence of chars forwards and backwards
single characters are not palindromes
case sensitive
non-alphabetic characters must be considered
duplicates should be considered
return empty array if no palindromes

Examples:
palindromes('madam');      // [ "madam", "ada" ]

Steps:
Get all substrings in an array
Find words in list of substrings that are palindromes

Algorithm:
Create function `palindromes` that takes one arg (string)
Obtain array of sustrings and assign to `allSubstrings` variable
  Pass string to previous substrings method
Iterate over 'allSubstrings` & filter for
  length != 1 &
  current element is palindrome (helper isPalindrome)
Return filtered array

Helper isPalindrome:
  Break string into array of chars
  Check that array reversed and joined back to string 
    equivalent to substring
  return boolean
*/
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

function isPalindrome(string) {
  // console.log([...string].reverse().join(''));
  // console.log(string);
  return [...string].reverse().join('') === string;
}

function palindromes(string) {
  let allSubstrings = substrings(string).flat();
  // console.log(allSubstrings);
  return allSubstrings.filter(substr => {
    return (substr.length !== 1 && isPalindrome(substr));
  });
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
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]