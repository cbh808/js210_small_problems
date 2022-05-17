/*
Write a function that displays a four-pointed diamond in an nxn grid, 
where n is an odd integer supplied as an argument to the function. 
You may assume that the argument will always be an odd integer.

Examples:
diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

    Input
        An odd integer n that represents the size of the diamond
        n represents the total number of rows, as well as the width of the widest row
    Output
        The return value of the function is not significant
        The program should print out a diamond made up of * characters

    Requirements
    Using n = 5 as an example:
        Each row is a string of asterisks, prepended by spaces
        The 5 rows will have 1, 3, 5, 3, and 1 asterisks
        The 5 rows will have 2, 1, 0, 1, and 2 spaces prepended

    Mental Model
        for a diamond of size n:
            Each row is a string of asterisks, prepended by spaces
            The n rows will have 1, 3, ... n, ... 3, 1 asterisks
            Each row will have (n - countOfAsterisks) / 2 spaces

Algorithm
Generate a sequence of numbers for a given odd number n
  1, 3, 5, ... n, n-2, ... 1 (see helper)
for each number in this sequence
  log out the concatenation of `(n - number) / 2` spaces and `number` asterisks

Helper method => generate the sequence of numbers:
    Initialize increment to 2
    Start with the first number, 1, increment the number by increment with each step
    When the number equal to n, flip the increment to -2
    Stop before we get to a negative number
*/

function getStarSequence(number) {
  let stars = [];
  let num = 0;
  for (num = 1; num < number; num += 2) {
    stars.push(num);
  }
  for (num; num > 0; num -= 2) {
    stars.push(num);
  }
  return stars;
}

function logSpaces(numStars, number) {
  let spaces = '';
  for (let space = 1; space <= (number - numStars) / 2; space += 1) {
    spaces += ' ';
  }
  return spaces;
}

function logStars(seqNum) {
  let stars = '';
  for (let star = 1; star <= (seqNum); star += 1) {
    stars += '*';
  }
  return stars;
}

function diamond(number) {
  let stars = getStarSequence(number);
  stars.forEach(numStars => {
    console.log(logSpaces(numStars, number) + logStars(numStars));
  });
}

diamond(1);
console.log('');
diamond(3);
console.log('');
diamond(9);

/* Other solutions:

Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Problem:
- Write function `diamond` with `n` as its parameter

Rules:
- Explicit:
  - input number will always be an odd integer
Examples:

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *
 
 diamond(9);
// logs
    *         // 4 spaces 5th space => star
   ***        // 3 spaces 4th space => 3 stars 
  *****       // 2 spaces 3rd space => 5 stars
 *******      // 1 spaces 2nd space => 7 stars
 
*********     // 0 spaces 0   space => 9 stars

 *******
  *****
   ***
    *
Algorithm:
- First Half
  - Declare `middle` and assign it to:
    - Get the initial length of what is logged    
    - divide input number by two and round it to the next hightest num

  - declare `space` => assign it to middle - 1
  - declare `star`  => assign it to 1

- Create a FOR Loop
  - CONDITIONS:
    - break loop once `star` is equal to `n`
      - iterate as long as star is less than `n`
    - at each iteration, increment `star` by 2
  - declare `currentString` and assign it to:
  - use repeat method to get `space` number of spaces
  - use repeat method to get `star` number of stars
  - concatenate both
  - log `currentString`
  - reasign `spaces` to : decrement by one at each iteration

- log `*`, `n` times

- Second half
- Check what `star` is pointint to, make sure it 7 
- Check what `space` is pointing to, make sure its 1 

- Create a For Loop
- CONDITIONS:
    - break loop once `star` is less than 0
      - iterate as long as star greater than 0
    - at each iteration, decrement `star` by 2
- declare `currentString` and assign it to:
  - use repeat method to get `space` number of spaces
  - use repeat method to get `star` number of stars
  - concatenate both
  - log `currentString`
  - reasign `space` to : increment by one at each iteration
  
*/

// function diamond(n) {
//   const MIDDLE = Math.round(n/2);
//   let space = MIDDLE - 1;
//   let star = 1;
  
//   for (; star < n; star += 2) {
//     let currentString = ' '.repeat(space) + '*'.repeat(star);
//     console.log(currentString);
//     space -= 1;
//   }
  
//   console.log('*'.repeat(n))
  
//   star -= 2;
//   space += 1;
  
//   for (; star > 0; star -= 2) {
//     let currentString = ' '.repeat(space) + '*'.repeat(star);
//     console.log(currentString);
//     space += 1;
//   }
// }

// const DIAMOND = '*';
// const SPACE = ' ';

// function getTopHalf(number) {
//   let midNumber = Math.round(number / 2);
//   let numberOfStars = 1;
//   let numberOfSpaces = (midNumber - 2);

//   for (let line = 1; line < midNumber; line += 1) {
//     console.log(SPACE.repeat(numberOfSpaces), DIAMOND.repeat(numberOfStars));
//     numberOfSpaces -= 1;
//     numberOfStars += 2;
//   }
// }

// function getBottomHalf(number) {
//   let numberOfSpaces = 0;
//   let numberOfStars = (number - 2);
//   let midNumber = Math.round(number / 2);

//   for (let line = 1; line < midNumber; line += 1) {
//     console.log(SPACE.repeat(numberOfSpaces), DIAMOND.repeat(numberOfStars));
//     numberOfStars -= 2;
//     numberOfSpaces += 1;
//   }
// }

// function diamond(number) {
//   let midNumber = Math.round(number / 2);
//   let midLine = DIAMOND.repeat(number);

//   getTopHalf(number);

//   console.log(midLine);

//   getBottomHalf(number);
// }


// console.log(diamond(1));
// console.log(diamond(3));
// console.log(diamond(9));

