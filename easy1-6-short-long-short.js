function shortLongShort(str1, str2) {
  const sortedArray = [str1, str2].sort((a, b) => a.length - b.length);
  const shortString = sortedArray[0];
  const longString  = sortedArray[1];
  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"

console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"

console.log(shortLongShort('', 'xyz'));         // "xyz"

