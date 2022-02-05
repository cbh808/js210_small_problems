/*
Write a function with string arg
string has one or more space separated words
returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}


input string
output: object with key as number of letters in word / value number of words of that length

Algorithm:
convert string to an array of words
map words to array of lengths
reduce array to an object 
return object 

*/

function wordSizes(string) {
  if (!string) return {};
  let result = string.split(' ').map(word => word.length).reduce((obj, length) => {
    obj[length] = (obj[length] + 1 || 1);
    return obj;
  }, {});
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));  