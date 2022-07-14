function leadingSubstrings(string) {
  let array = string.split('');
  let result = array.reduce((arr, _, idx) => {
    arr.push(string.slice(0, idx + 1));
    return arr;
  }, []);

  return result;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]