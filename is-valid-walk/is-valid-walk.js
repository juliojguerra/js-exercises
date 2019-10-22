function isValidWalk(arr) {
  if (!arr.length) {
    return false;
  }

  let north = 0;
  let south = 0;
  let west = 0;
  let east = 0;
  let sum = 0;
  arr.forEach(element => {
    switch (element) {
      case 'n':
        north += 1;
        break;
      case 's':
        south += 1;
        break;
      case 'w':
        west += 1;
        break;
      case 'e':
        east += 1;
        break;
    }
  });

  sum = north + south + west + east;

  return north == south && west == east && sum == 10 ? true : false;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

console.log(
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
);

console.log(isValidWalk(['w']));

console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
