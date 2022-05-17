/*
Problem:
Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

Example:
showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

Data Structures;
inputs array of numbers
output: number to 3 decimal places

Algorithm:
Reduce numbers of array to the value of multiplying all together
Divide by the length of the input array

Convert number to string
  find the dot using indexOf
    if dot
      check string length
        if less than index of dot + 3, add corresponding number of 0's
        else take index of dot + three characters after dot
        7.5
        
    if no dot, add dot + 3 0's to string
      
Return string
*/

function showMultiplicativeAverage(array) {
  let multiplier = array.reduce((total, value) => {
    return total *= value
  }, 1);
  let number = multiplier / array.length;
  console.log(number);
  
  number = String(number);
  
  let indexDot = number.indexOf('.');
  if (number.length < indexDot + 4) {
    let numberOfZeros = indexDot + 4 - number.length
    for (let i = 0; i < numberOfZeros; i += 1) {
      number += '0'  
    }
  } else if (number.length > indexDot + 4) {
    
    number = (number.slice(0, indexDot + 5));
    number = Number(number)
    number = Math.round(number * 1000);
    number /= 1000;
    number = String(number);
//     number = number.slice(0, indexDot + 4);
  
  }
    
  
  console.log(number);
  
}

function divide(number, divisor) {
  return number / divisor;
}

function showMultiplicativeAverage(arr) {
  let product = 1;
  let divisor = arr.length;

  arr.forEach(el => product *= el);

  product = divide(product, divisor);

  return product.toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"