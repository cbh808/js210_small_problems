const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function charIsLetter(char) {
  let regex = new RegExp(/[a-z]/i);
  return regex.test(char)
}

function caesarEncrypt(str, key) {
  let encrypted = '';

  str.split('').forEach (char => {
    if (!charIsLetter(char)) {
      encrypted += char;
    } else {
      let index = ((alphabet.indexOf(char.toLowerCase()) + key) % 26)
      let encodedChar = alphabet.charAt(index);

      if (char === char.toLowerCase()) {
        encrypted += encodedChar;
      } else encrypted += encodedChar.toUpperCase();
    }
  });
  return encrypted;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"