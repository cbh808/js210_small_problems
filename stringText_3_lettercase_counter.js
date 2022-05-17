/*
Lettercase Counter

Problem:
Write a function that takes a string
Return an object containing three properties: 
  -one representing the number of characters in the string that are lowercase letters,     -one representing the number of characters that are uppercase letters
  -one representing the number of characters that are neither.

input: string
output: object with three properties

Examples:

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

Algorithm:
create result object with properties `lowercase`, `uppercase`, `neither`
  all with values set to 0
iterate over all the characters of the string
 compare current character to set of lowercase letters
  if lowercase => increment lowercase
  if uppercase => increment uppercase
  otherwise increment neither
*/

function letterCaseCount(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  
  string.split('').forEach(char => {
    if (/[A-Z]/.test(char)) {
      result.uppercase += 1;
    } else if (/[a-z]/.test(char)) {
      result.lowercase += 1;
    } else result.neither += 1;
  });
  
  return result;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
