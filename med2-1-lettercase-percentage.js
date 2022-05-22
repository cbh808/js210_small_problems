/*
Problem: 
input: string
output: object with 3 properties
  lowercase: % chars to 2 digits after decimal (string)
  uppercase: % chars to 2 digits after decimal (string)
  neither: % chars to 2 digits after decimal (string)

Rules: 
min "0.00"
max "100.00"
if not an array, string, or number return 'invalid argument'

letterPercentages('abCdef 123');
{ lowercase: "50.00",=> 5/10
  uppercase: "10.00",=> 1/10
  neither: "40.00" => rest/10 => e.g. (10 - 5 - 1) / 10}

Data Strucutures;
input string => evaluate each character => use built in array methods
output object => object or convert list of properties to object

Algorithm:
Guard Clause data type
Check data type
  return true if string, number or Array type
  otherwise false 

Helper clean data 'normalizeString'
  convert valid input to string
    if input Array, join together the individual elements with empty delimiter
    if number convert to number

Helper determinePercentage
  2 args(counter, numChars)
  divide counter/numChars and truncate to 2 digits
  return result as string
    parse number as a float and fix digits to 2

Create function with string arg
  Initialize 'percentages' object and set to empty object

  Check that input string is a valid type => helper
  If not valid, return 'invalid input'

  Normalize input string => helper

  Calculate percentages for each property name
    Initialize counters 'lowercase', 'uppercase', and 'neither' and set to 0
    Determine 'stringLength'
    Convert string to array of characters and access each char
      Increment counter according to lowercase, uppercase, neither
        use regex to determine if lowercase => increment
        use regex to determine if upperercase => increment
        otherwise increment neither
    Add String version of percentage to output object
      create property name and set equal to value of each percentage to 2 digits
  Return 'percentages' object
*/
function validType(string) {
  return typeof string === 'string' ||
  typeof string === 'number' ||
  Array.isArray(string);
}

function normalizeString(string) {
  if (Array.isArray(string)) {
    return string.join('');
  }
  return String(string);
}

function updateObj(lowercase, uppercase, neither, stringLen, resultObj) {
  if (stringLen === 0) {
    stringLen = 1;
  }
  resultObj.lowercase = (lowercase / stringLen * 100).toFixed(2);
  resultObj.uppercase = (uppercase / stringLen * 100).toFixed(2);
  resultObj.neither = (neither / stringLen * 100).toFixed(2);
}

function letterPercentages(string) {
  if (!validType(string)) {
    return 'invalid argument';
  } else string = normalizeString(string);

  let resultObj = {};
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;
  let stringLen = string.length;

  string.split('').forEach(char => {
    if (char.match(/[a-z]/)) {
      lowercase += 1;
    } else if (char.match(/[A-Z]/)) {
      uppercase += 1;
    } else neither += 1;
  });

  updateObj(lowercase, uppercase, neither, stringLen, resultObj);

  return resultObj;
}

console.log(letterPercentages({a:7}));
// "invalid argument"

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages(''));
// { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }

console.log(letterPercentages(['a', 'b', 'A', '-']));
// { lowercase: "50.00", uppercase: "25.00", neither: "25.00" }

console.log(letterPercentages(42));
// { lowercase: "00.00", uppercase: "00.00", neither: "100.00" }

console.log(letterPercentages(NaN));
// { lowercase: "33.33", uppercase: "66.67", neither: "00.00" }
