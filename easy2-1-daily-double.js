function crunch(string) {
  let result = '';
  string.split('').forEach (char => {
    if (result[result.length - 1] !== char) {
      result += char;
    }
  });
  return result;
}

function crunch1(string) {
  return string.replace(/([a-z0-9])\1+/ig, '$1');
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba')           === "4abcabcba");
console.log(crunch('ggggggggggggggg')         === "g");
console.log(crunch('a')                       === "a");
console.log(crunch('')                        === "");
console.log('====')
console.log(crunch1('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch1('4444abcabccba')           === "4abcabcba");
console.log(crunch1('ggggggggggggggg')         === "g");
console.log(crunch1('a')                       === "a");
console.log(crunch1('')                        === "");