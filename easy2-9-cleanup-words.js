function cleanUp(string) {
  return string.replace(/[^a-z]+/ig, ' ');
}

console.log(cleanUp("---what's my +*& line?"));   // " what s my line "
console.log(cleanUp("---whAT's my +*& line?"));   // whAT s my line