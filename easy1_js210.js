/*
Log all odd numbers from 1 to 99, inclusive, to the console, 
with each number on a separate line.
*/

for (let n = 1; n < 10; n += 2) {
  console.log(n);
}

let k = 1
while (k < 10) {
  console.log(k);
  k += 2;
};

// log even numbers using continue statement
for (let i = 1; i < 10; i += 1) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}