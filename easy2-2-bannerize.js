function midparts(length, type = ' ') {
  let result = '';
  for (let i = 1; i <= length; i += 1) {
    result += type;
  }
  return result;
}

function logInBox(string) {
  let length      = string.length;
  let leftCorner  = '+-';
  let rightCorner = '-+';
  let leftSide    = '| ';
  let rightSide   = ' |';

  console.log(leftCorner + midparts(length, '-') + rightCorner);
  console.log(leftSide + midparts(length) + rightSide);
  console.log(leftSide + string + rightSide);
  console.log(leftSide + midparts(length) + rightSide);
  console.log(leftCorner + midparts(length, '-') + rightCorner);
}

logInBox('To boldly think about going where no one has gone before.');
logInBox('To boldly go!');
logInBox('To go.  (...with fries please.)');
logInBox('');