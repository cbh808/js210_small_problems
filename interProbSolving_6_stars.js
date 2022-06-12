/*
Algorithm:
find number middle row based on 0 index
Intialize 'initialSpaces' and set to 0
Initialize 'middleSpaces' and set to (number - 3) / 2
Initialize 'stars' and set to 0
Draw top half
  Loop from 0 to less than 'middle row' number of times
    Log to the console concatenation of:
      initialSpaces, star, middle spaces, star, middleSpaces, star 
    Increment initialSpaces, decrement middleSpaces
Draw middle 
  Log 'number' stars to the console
Draw bottom half
  Loop from 0 to less than 'middle row' number of times
    Log to the console concatenation of:
      initialSpaces, star, middle spaces, star, middleSpaces, star 
    Decrement initialSpaces, Increment middleSpaces
*/
const numStars = 3;

function star(number) {
  let middleRow = Math.floor(number/2);
  let initialSpaces = 0;
  let middleSpaces = ((number - numStars) / 2);
  
  for (let i = 0; i < middleRow; i += 1) {
    console.log(' '.repeat(initialSpaces) + '*' + ' '.repeat(middleSpaces) + '*' + ' '.repeat(middleSpaces) + '*');
    if (middleSpaces === 0) break;
    initialSpaces += 1, middleSpaces -= 1;
  }
  console.log('*'.repeat(number));
  
  for (let i = 0; i < middleRow; i += 1) {
    console.log(' '.repeat(initialSpaces) + '*' + ' '.repeat(middleSpaces) + '*' + ' '.repeat(middleSpaces) + '*');
    initialSpaces -= 1, middleSpaces += 1;
  }
}

star(9);

/* logs

*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

*/
console.log('----9----')
console.log('')
console.log('---7---')
star(7);
/* logs

*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

*/