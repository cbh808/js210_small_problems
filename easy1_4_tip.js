let readlineSync = require("readline-sync");

console.log('What is the bill?');
let bill = Number.parseFloat(readlineSync.prompt());
console.log('What is the tip percentage?');
let tipPercentage = Number.parseFloat(readlineSync.prompt()) / 100;
let tip = bill * tipPercentage;
console.log(`The tip is $${(tip).toFixed(2)}`);
console.log(`The total is $${(bill + tip).toFixed(2)}`);
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00