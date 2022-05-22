/*
Problem:
  Triangle Definitions:

    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

  Valid Triangle:
    sum of 2 shortest sides lengths > length of longest side
    all sides lengths > 0

  Invalid Triangle
    triagle not fulfilling valid rules

input: lengths of sides of triangle
output string, representing equilateral, isosceles, scalene, invalid

Rules:
all inputs are numbers, integers or floats
no need to deal with NaN, +- Infinity

Data Structure:
Numbers input => find smallest two numbers -OR- largest
  => convert to array to enable sorting of numbers from lowest to highest
output: string based on evaluation of numbers

Algorithm:
Create function taking 3 args
Use rest syntax to create array and sort numerically
  sort from lowest to highest
Ensure Valid Triangle
  Return 'invalid' if numArray[0] <= 0;
  Retrun 'invalid' if numArray[2] !< sum numArray[1] + numArray[0];
Determine Type of Triangle
  Return 'equilateral' if numArray[0] equiv. numArray[2]
  Return 'isosceles' if
    numArray[0] equiv. numArray[1]
    numArray[0] equiv. numArray[2]
    numArray[1] equiv. numArray[2]

  Return 'scalene'
*/

function invalidTriangle(sides) {
  return (sides[0] <= 0) || (sides[2] >= sides[1] + sides[0]);
}

function triangle(...sides) {
  sides.sort((a, b) => a - b);

  if (invalidTriangle(sides)) return 'invalid';

  if (sides[0] === sides[2]) {
    return 'equilateral';
  } else if ( sides[0] === sides[1] ||
              sides[0] === sides[2] ||
              sides[1] === sides[2]) {
    return 'isosceles';
  }
  return 'scalene';

}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"