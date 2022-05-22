function triangleInvalid(a1, a2, a3) {
  return (a1 + a2 + a3 !== 180 || [a1, a2, a3].some(angle => angle <= 0));
}

function triangleType(a1, a2, a3) {
  if (a1 < 90 && a2 < 90 && a3 < 90) {
    return 'acute';
  } else if ((a1 > 90 || a2 > 90 || a3 > 90)) {
    return 'obtuse';
  } else return 'right';
}
function triangle(angle1, angle2, angle3) {
  if (triangleInvalid(angle1, angle2, angle3)) return 'invalid';
  return triangleType(angle1, angle2, angle3);
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"