/*Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. 

Rules:
All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. 
Words will be separated by a single space.

Example:
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

Algorithm:
Split each string into an array of words
Transform array:
  - if length of word >= 5, then convert to chars, reverse, and join
  - else leave word as is
Return transformed array joined back into string
*/

function reverseWords(string) {
  let array = string.split(' ');
  let supertransformedarray = array.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  });
  return supertransformedarray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"