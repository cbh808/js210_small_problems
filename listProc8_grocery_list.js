/*
Create empty array 'finalList'

Put values into finalist:
  access each nested array 'nested'
    obtain value from nested[0]
    create for loop to execute above step nested[1] times
      loop from 1 to <= nested[1]
      push current value to finalList

Return finalList


*/

function buyFruit(groceriesNested) {
  let finalList = [];

  groceriesNested.forEach(nested => {
    let value = nested[0];
    for (let times = 1; times <= nested[1]; times += 1) {
      finalList.push(value);
    }
  });
  return finalList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]