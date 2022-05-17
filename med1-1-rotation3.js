function rotateRightmostDigits(num, arg2) {
  if (arg2 <= 1) return num;
  let str = String(num);
  let prefix = str.slice(0, -arg2);
  let middle = str.slice(-arg2 + 1);
  let last = str.slice(-arg2, -arg2 + 1);
  return Number(prefix + middle + last);
}

function maxRotation(number) {
  for (let len = String(number).length; len > 1; len -= 1) {
    number = rotateRightmostDigits(number, len);
  }
  return number;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845