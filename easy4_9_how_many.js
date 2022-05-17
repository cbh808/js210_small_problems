/*
Count number of occurrences of each element in array
Log each element alongside the number of occurrences

Algorithm:
Create `counts` object, assign empty object
iterate over elements of array, adding or incrementing each type to object
  - if key not defined, create key/value pair with value set to 0
  - increment key/value by 1

Create helper to output results, pass in obj as arg
Create array of keys
iterate over keys and output in string format
*/

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function outputResults(object) {
  Object.keys(object).forEach(key => {
    console.log(`${key} => ${object[key]}`)
  });
}

function countOccurrences(vehicles) {
  let counts = {};
  vehicles.forEach(function(vehicle) {
    if (counts[vehicle] === undefined) {
      counts[vehicle] = 0;
    }
    counts[vehicle] += 1;
  });
  outputResults(counts);
}

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2