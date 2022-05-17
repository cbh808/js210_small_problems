function leadingSubstrings(string) {
  let substrings = [];
  for (let len = 1; len <= string.length; len += 1) {
    substrings.push(string.slice(0, len));
  }

  return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]