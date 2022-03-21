function getInt() {
  return parseInt(prompt('Please enter an integer greater than 0: ', 10));
}

function getOperator() {
  return prompt('Enter "s" to compute the sum, or "p" to compute the product. ').toLowerCase();
}

function sumOneToInt(int) {
  let sum = 0;
  for (num = 1; num <= int; num += 1) {
    sum += num;
  }
  return sum;
}

function productOneToInt(int) {
  let product = 1;
  for (num = 1; num <= int; num += 1) {
    product *= num;
  }
  return product;
}

function getResult(int, operator) {
  if (operator === 's') {
    return sumOneToInt(int);
  } else if (operator === 'p') {
    return productOneToInt(int);
  } else {
    return 'Wrong operator type was input. Please try again.'
  }
}

function requestSumOrProduct() {
  let int = getInt();
  let operator = getOperator();
  console.log(getResult(int, operator));
}

requestSumOrProduct();