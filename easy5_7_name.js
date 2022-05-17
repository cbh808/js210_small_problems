/* Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Algorithm:
  -Convert the argument into an array
  -reverse the array
  -join the reversed array with a `,` argument

*/

function swapName(string) {
  return string.split(' ').reverse().join(', ');  
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"