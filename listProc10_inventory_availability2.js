
//   return filteredTransactions;
// }


// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// Filter for the item number
// Iterate over objects
// sum the value of the `quantity` key
//     if sum > 0 => true
//     else false

function transactionsFor(itemIdValue, allTransactions) {
    return allTransactions.filter(transaction => {
      let currentTransaction = Object.entries(transaction);
      return currentTransaction[0][1] === itemIdValue;
    });
  };

function isItemAvailable(itemIdValue, allTransactions) {
  let filteredTransactions = transactionsFor(itemIdValue, allTransactions);
  let inventory = filteredTransactions.reduce((sum, obj) => {
    if (obj.movement === 'in') {
      return sum + obj.quantity;
    } else return sum - obj.quantity;
  }, 0);
  return inventory > 0;
}

function isItemAvailable(item, transactions) {
  let totalSum = transactions.reduce((sum, obj) => {
    if (obj.id === item) {
      if(obj.movement === 'in') {
        sum += obj.quantity;
      } else {
        sum -= obj.quantity;
      }
    }
    return sum
  }, 0);
  
  return totalSum > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true