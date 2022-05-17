/* 
use Math.random
use min age + floor of (random number * (range of ages + 1))
20 + 0 * 181 = 20
20 + floor(.999 * 181) = 20 + 180 = 200
200 - 20 = 180
*/

let ageMin = 20;
let ageMax = 200;
let ageSpan = ageMax - ageMin + 1;
let randomAge = ageMin + Math.floor(Math.random() * ageSpan)
console.log(`Teddy is ${randomAge} years old!`)