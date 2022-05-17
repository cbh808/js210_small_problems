/*
Write a function that takes a string as an argument
Returns an array that contains every word from the string
Each word to be followed by a space and the word's length. 
Rules:
If the argument is empty string or if no argument is passed, 
  the function should return an empty array.
Every pair of words in the string will be separated by a single space.
input: string, words separated by spaces
output: array of strings with word and its length
Algorithm:
separate words of string into an array of words
tranform array to include the length of each word
*/

function wordLengths(string) {
  let result = [];
  if (string) {
    result = string.split(' ').map(word => {
      return word + ' ' + String(word.length);
    });
  }
  return result;
}
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []