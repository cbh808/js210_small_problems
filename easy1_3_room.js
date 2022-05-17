/* 3 how big is room
Build a program that asks user to enter length and width of a room in meters
Logs the area of the room to the console in both square meters and square feet
Note: 1 square meter == 10.7639 square feet
Rules:
Do not worry about validating the input at this time.
Use readlineSync.prompt method to collect user input.

Example:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/
// let readlineSync = require("readline-sync");
// const METERS_TO_FT = 10.7639;
// console.log('Enter the length of the room in meters: ');
// let length = Number(readlineSync.prompt()); // get number as string & convert to number
// console.log('Enter the width of the room in meters: ');
// let width  = Number(readlineSync.prompt());
// let areaM  = (length * width).toFixed(2);
// let areaFt = (areaM * METERS_TO_FT).toFixed(2);
// console.log(`The area of the room is ${areaM} square meters (${areaFt} square feet).`);

let readlineSync = require("readline-sync");
const METERS_TO_FT = 10.7639;
const FT_TO_METERS = 1 / METERS_TO_FT;

let baseunit;
let firstLetter;

do {
  console.log('Would you like to use meters (m) or feet (f)? ');
  baseunit = readlineSync.prompt();
  firstLetter = baseunit[0].toLowerCase();
} while (firstLetter !== 'm' || firstLetter !== 'f');

baseunit = baseunit === 'm' ? 'meters' : 'feet';
let converted = baseunit === 'meters' ? 'feet' : 'meters';
let conversion = baseunit === 'meters' ? METERS_TO_FT : FT_TO_METERS;

console.log(`Enter the length of the room in ${baseunit}: `);
let length = Number(readlineSync.prompt());
console.log(`Enter the width of the room in ${baseunit}: `);
let width  = Number(readlineSync.prompt());
let areaBase  = (length * width).toFixed(2);
let areaConv = (areaBase * conversion).toFixed(2);
console.log(`The area of the room is ${areaBase} square ${baseunit} (${areaConv} square ${converted}).`);