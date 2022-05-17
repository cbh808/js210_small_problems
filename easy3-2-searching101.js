function enterNumbers() {
  const numberCount = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
  let answer;
  let last;
  let numbers = [];
  numberCount.forEach((count, index) => {
    answer = prompt(`Enter the ${count} number: `);
    numbers.push(answer);
    if (index === numberCount.length - 1) {
      last = answer;
    }
  });
  console.log();
  let slice = numbers.slice(0, numbers.length - 1)
  if (slice.includes(last)) {
    console.log(`The number ${last} appears in [${slice.join(', ')}].`)
  } else console.log(`The number ${last} does not appear in [${slice.join(', ')}].`)
}

enterNumbers();
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].