// check slice 1 === slice 2

function twice(num) {
  let middle = String(num).length / 2;
  // console.log('middle: ' + middle);
  let firstHalf = String(num).slice(0, middle);
  let secondHalf = String(num).slice(middle);
  // console.log('first half: ' + firstHalf);
  // console.log('sec Half: ' + secondHalf);
  let result = (firstHalf === secondHalf ? num : num * 2);

  return Number(result);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676