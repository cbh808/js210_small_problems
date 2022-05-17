const SPACE = ' ';
const STAR = '*';

function rightTriangle(starsMax) {
  for (num = 1; num <= starsMax; num += 1) {
    let spaces = SPACE.repeat(starsMax - num);
    let stars = STAR.repeat(num);
    console.log(spaces + stars);
  }
}

rightTriangle(3);
console.log(' ');
rightTriangle(5);
console.log(' ');
rightTriangle(9);