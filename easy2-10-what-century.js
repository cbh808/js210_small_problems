/*
1st
2nd
3rd
4th - 10th

11th
12th
13th

get century
  number divided 100  + 1
  if remainer 100 equiv 0 => don't subtract 1
determine prefix
  get last 2 digits 
    if 11 - 14 => 'th'
    else standard suffix
*/
function getCentury(year) {
  return String(year % 100 === 0 ? year / 100 : Math.floor(year / 100 + 1));
}

function standardSuffix(last) {
  if (last === 1) {
    return 'st';
  } else if (last === 2) {
    return 'nd';
  } else if (last === 3) {
    return 'rd';
  } else return 'th';
}

function getSuffix(century) {
  let last = century % 10;
  let lastTwo =  century % 100;
  if (lastTwo >= 11 && lastTwo <= 13) {
    return 'th';
  } else return standardSuffix(last);
}

function century(year) {
  let century = getCentury(year);
  let suffix = getSuffix(century);
  return century + suffix
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th" 