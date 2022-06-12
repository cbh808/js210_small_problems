/* Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

input: string
output: encrypted string

Rules:
non-alphabetic chars stay same
output is case sensitive
use Vignere keyword => shift value is NOT case sensitive

Example:
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Data Structures

index based lookup to find shift value, string
'abcdef...z'

result: string, encoded

Algorithm:
Create const lookup table, string of lowercase alphabet

For each char in string:
Get shift value
  if not char => shift value equal 0 
  get shift value by taking current letter of keyword 
    get index of keyword by taking remaineder of keyword counter reaminder of keyword length
  only increment keyword value if char
  
Get encoded character 
  apply shift value to index of char
    get index of current char converted to lowercase
    add shift value to index and take remainder 26
  Add char to result string with correct case

Return result string
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function charIsLetter(char) {
  let regex = new RegExp(/[a-z]/i);
  return regex.test(char)
}

function getAlphaIdx(index) {
  return alphabet.indexOf(index)
}

function encryptChar(char, keyword, keywordIdx, encrypted) {
  let keywordChar = keyword[keywordIdx % keyword.length].toLowerCase();
  let encodedIdx = (getAlphaIdx(char.toLowerCase()) + getAlphaIdx(keywordChar)) % alphabet.length;
  let encodedChar = alphabet.charAt(encodedIdx);

  if (char === char.toLowerCase()) {
    encrypted += encodedChar;
  } else {
    encrypted += encodedChar.toUpperCase();
  }
  return encrypted;
}

function vignere(str, keyword) {
  let encrypted = '';
  let keywordIdx = 0;

  str.split('').forEach (char => {
    if (!charIsLetter(char)) {
      encrypted += char;

    } else {
      encrypted = encryptChar(char, keyword, keywordIdx, encrypted);
      keywordIdx += 1;
    }
  });
  return encrypted;
}

console.log(vignere('Pineapples don\'t go on pizzas!', 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vignere('Pineapples don\'t go on pizzas!', 'MeAt'));
// Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vignere('|- - = - -|', 'MeAt'));
// |- - = - -|