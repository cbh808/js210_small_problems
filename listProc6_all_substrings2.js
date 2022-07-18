/*
Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

input: string
output: array of all substrings

Steps:
create result and set to empty array
get substring from origial string to iterate over
  for each char in string
  obtain slice from char to end of string
pass slice to leading substrings function
concatenate return value to result
*/

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

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]