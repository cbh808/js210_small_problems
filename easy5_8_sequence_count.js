/*
Create empty array 'result'

Assign 'multiple' to 'elementValue'

Guardclause for NaN and null
  if multiple is NaN or null return result;

Loop 'numElements' times
  Loop over array indexes, Stop loop if numElements reached
  Push 'elementValue' to end of 'result'
  Increment 'elementValue' by 'multiple'

Return 'result'
*/


function sequence(numElements, multiple) {
  let result = [];
  let elementValue = multiple;
  if (Number.isNaN(multiple) || multiple === null) return result;
  for (let idx = 0; idx < numElements; idx += 1) {
    result.push(elementValue);
    elementValue += multiple;
  }
  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(3, -0));         // [-0, -0, -0]
console.log(sequence(0, 1000000));    // []
console.log(sequence(3, Infinity))    // [Infinity, Infinity, Infinity]
console.log(sequence(3, NaN))         // [] (in lieu of [NaN, NaN, NaN])
console.log(sequence(3, null));       // [] (in lieu of [null, 0, 0])