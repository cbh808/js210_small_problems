function rotateRightmostDigits(num, arg2) {
  if (arg2 <= 1) return num;
  let str = String(num);
  let prefix = str.slice(0, -arg2);
  let middle = str.slice(-arg2 + 1);
  let last = str.slice(-arg2, -arg2 + 1);
  return Number(prefix + middle + last);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917