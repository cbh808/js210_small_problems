// ignores non-alphabetic characters when determining 
// whether a letter should be upper or lower caseType

function nonCharacter(char, regex) {
  return regex.test(char);
}

function getChar(char, upperCase) {
  if (upperCase === true) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
}

function staggeredCase(string) {
  let upperCase = true;
  let regex = new RegExp('[^a-z]', 'i');
  return string.split('').map(char => {
    if (!nonCharacter(char, regex)) {
      char = getChar(char, upperCase);
      upperCase = !upperCase;
    }
    return char;
  }).join('');
}
console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"