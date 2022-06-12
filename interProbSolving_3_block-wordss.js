/* Now I Know My ABCs

A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

Problem:
input: string, word
output: boolean, indicating if block rules are met

Rules:
strings are case-insensitive

Given a series of spelling blocks, each with two letters
check if a word is a 'BlockWord', meaning each block is used only zero or one times and only one letter from each block is used

Data Stuctures:
input: string 'batch'
representation of blocks
['bo', 'xk', ...]
find index of each letter of input word
  For each block in blocks
    check whether current letter is within current block
      Y; add index where letter found to 'indexes' array  if not alredy in array of indexes [1, 0, 12, 13]
      N: go to next block
output: boolean

Algorithm:
Create array 'blocks' and set to array of 13 two-letter substrings
Create function that takes string arg 'word'
Create empty array 'indexes'
Set 'word' to all lowercase version of 'word'
Find index of each letter of input word
For each char in word, get the index in blocks
  For each block in blocks
    check whether current letter is within current block
      Y; add index where letter found to 'indexes' array  if not alredy in array of indexes [1, 0, 12, 13]
        break out of inner loop
      N: go to next block
Check that length of 'indexes' array is equal to length of 'word'
  Y: return true
  N: return false
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
*/

const blocks = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're',
'fs', 'jw', 'hu', 'vi', 'ly', 'zm'];

function isBlockWord(word) {
  let indexes = [];
  word = word.toLowerCase();

  word.split('').forEach (char => {
    for (let idx = 0; idx < blocks.length; idx += 1) {
      if (blocks[idx].includes(char) && !indexes.includes(idx)) {
          indexes.push(idx);
          break;
      }
    }
  });
  return indexes.length === word.length;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('batch'));      // true
console.log(isBlockWord('batchES'));    // true
console.log(isBlockWord('batchESS'));   // false
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('BuTcH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));           // true