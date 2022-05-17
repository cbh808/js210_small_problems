/*
Problem:

  -Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.
  
  You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Examples:

  function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

Algorithm:

  -create an empty array 'lights' to hold our final value
  -populate the 'lights' array with the value of all the elements to the string 'off'
    -the amount of elements is equal to our argument 'switches'
    -create a loop with a starting index of 0 that exits when the value of index has reached one less than the value of switches
      -on every iteration
        -push the string 'off' into 'lights'

  -create a loop starting at 0 and iterating up to one less than the number of switches in 'lights'
    -on every iteration
      -create another loop to determine the 'current light' and which lights will be toggled
        -set the value of the 'current light' to the 'current iteration' value in the outer loop
        -increment the value of 'current light' to the value of the 'current iteration' plus one (which lights will be toggled)
          -if the value of the current light is equal to 'off'
            -toggle to 'on'
          -else
            -toggle to 'off'

  -transform the 'lights' array into an array of the indexes whose lights are on
    -iterate over the array of lights
      -on each iteration
        -if the value of the element is 'on'
          -get the index at that value
          -transform the value of the element to the index number plus 1

  -filter the array for only those elements whose values are Numbers
    -if the type of element is a 'number'
      -select the element

  -return the filtered array
  
  [1,     2,     3,     4,     5]   
 on     on     on     on     on   first pass
        off           off         second pass every multiple of 2 is switched off   
on            off                 third pass every multiple of 3 is switched off
                      on          fourth multiple of 4
                             off  5th pass multiole of 5
RETURN WHAT IS ON [1, 4]           
*/

function initializeLights(switches) {
  let lights = [];
  for (let idx = 0; idx < switches; idx += 1) {
    lights.push('off');
  }
  return lights;
}

function switchLights(lights, switches) {
  for (let i = 0; i < switches; i += 1) {
    for (let currentLight = i; currentLight < switches; currentLight += i+1) {
      if (lights[currentLight] === 'off') {
        lights[currentLight] = 'on';
      } else {
        lights[currentLight] = 'off';
      }
    }
  }
  return lights;
}  
  
function lightsOn(switches) {
    let lights = initializeLights(switches); 
    lights = switchLights(lights, switches);
    lights = lights.map((state, index) => {
      if (state === 'on') {
        state = index + 1;
      }
      return state;
    });
  
  
    return lights.filter(value => {
      return typeof value === 'number'
    });
  
    // console.log(lights);
}


console.log(lightsOn(5));  //  [1, 4]
console.log(lightsOn(100));  //  [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]