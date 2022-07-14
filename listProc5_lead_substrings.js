function leadingSubstrings(string) {
  let result = [];
  string.split('').forEach((_, idx) => {
    result.push(string.slice(0, idx + 1));
  });
  return result;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]