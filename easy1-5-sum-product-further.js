function getOperator() {
  return prompt('Enter "s" to compute the sum, or "p" to compute the product. ').toLowerCase();
}

function sumOneToInt(array) {
  return array.reduce((sum, current) => {
    return sum += current;
  });
}

function productOneToInt(array) {
  return array.reduce((product, current) => {
    return product *= current;
  });
}

function getResult(array, operator) {
  if (operator === 's') {
    let sum = sumOneToInt(array);
    console.log(`The sum of the integers between 1 and ${String(array[array.length - 1])} is ${sum}.`);
  } else if (operator === 'p') {
    let product = productOneToInt(array);
    console.log(`The product of the integers between 1 and ${array[array.length - 1]} is ${product}.`);
  } else {
    return 'Wrong operator type was input. Please try again.'
  }
}

function requestSumOrProduct(array) {
  let operator = getOperator();
  console.log(getResult(array, operator));
}

requestSumOrProduct([1, 2, 3, 4, 5]);
