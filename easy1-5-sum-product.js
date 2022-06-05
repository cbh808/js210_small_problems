function getInt() {
  return parseInt(prompt('Please enter an integer greater than 0: ', 10));
}

function getOperator() {
  return prompt('Enter "s" to compute the sum, or "p" to compute the product. ').toLowerCase();
}

function sumOneToInt(int) {
  let sum = 0;
  for (let num = 1; num <= int; num += 1) {
    sum += num;
  }
  return sum;
}

function productOneToInt(int) {
  let product = 1;
  for (let num = 1; num <= int; num += 1) {
    product *= num;
  }
  return product;
}

function getResult(int, operator) {
  if (operator === 's') {
    let sum = sumOneToInt(int);
    return `The sum of the integers between 1 and ${int} is ${sum}.`;
  } else if (operator === 'p') {
    let product = productOneToInt(int);
    return `The product of the integers between 1 and ${int} is ${product}.`;
  } else {
    return 'Wrong operator type was input. Please try again.';
  }
}

function requestSumOrProduct() {
  let int = getInt();
  let operator = getOperator();
  console.log(getResult(int, operator));
}

requestSumOrProduct();
