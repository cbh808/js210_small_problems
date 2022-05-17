/*
Problem:
Write a function that takes a floating point number
Argument represents an angle between 0 and 360 degreea
Returns a string representing that angle in degrees, minutes, and seconds.
 -Use a degree symbol (˚) to represent degrees
 - a single quote (') to represent minutes
 - a double quote (") to represent seconds.

There are 60 minutes in a degree, and 60 seconds in a minute.

The whole number of the argument represnts degrees
The decimal * 60 gives a new float, the whole number is minutes
The remaining decimal * 60 rounded gives seconds

Algorithm:
detertimine degrees: The whole number of the argument represnts degrees
determine minutes: The decimal * 60 gives a new float, the whole number is minutes
determine seconds: The remaining decimal * 60 rounded gives seconds

concatenate with corresponding symbols for deg/min/sec/
*/

const MIN_DEG = 60
const SEC_MIN = 60

function convert(value) {
  value = String(value);
  if (value.length === 1) {
    value = '0' + value;
  }
  return value
}

function dms(number) {

  let degrees = Math.floor(number);
  let minutes = Math.floor((number - degrees) * MIN_DEG);
  // let seconds = Math.floor((((number - degrees) * MIN_DEG) - minutes) * SEC_MIN); 
  let seconds = Math.floor((((number - degrees) * MIN_DEG) - minutes) * SEC_MIN); 
  degrees = String(degrees);
  minutes = convert(minutes);
  seconds = convert(seconds);
  return degrees + '°' + minutes + "'" + seconds + '"';

}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"